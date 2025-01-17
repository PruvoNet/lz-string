#! /usr/bin/env -S node --enable-source-maps
/*
 * SPDX-FileCopyrightText: 2013 Pieroxy <pieroxy@pieroxy.net>
 *
 * SPDX-License-Identifier: MIT
 */
import { accessSync, constants, existsSync } from "fs";
import { Option, program } from "commander";

import { loadBinaryFile, saveBinaryFile } from "./node";
import { convertFromUint8Array, convertToUint8Array } from "./Uint8Array";

/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const pkg = require("../package.json");
const encoders = ["base64", "encodeduri", "raw", "uint8array", "utf16"];

program
    .version(pkg.version)
    .description("Use lz-string to compress or decompress a file")
    .addOption(new Option("-d, --decompress", "if unset then this will compress"))
    .addOption(new Option("-e, --encoder <type>", "character encoding to use").choices(encoders).default("raw"))
    .addOption(new Option("-v, --verify", "verify before returning").default(true))
    .addOption(new Option("-o, --output <output-file>", "output file, otherwise write to stdout"))
    .addOption(new Option("-q, --quiet", "don't print any error messages"))
    .addOption(new Option("--lib <file>", "lz-string file to use").default("../dist/index.js").hideHelp())
    .addOption(
        new Option("--legacy", "use legacy mode where uint8array decompression must be an even length").hideHelp(),
    )
    .argument("[input-file]", "file to process, if no file then read from stdin")
    .showHelpAfterError()
    .action(
        (
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            file = process.stdin.fd as any,
            {
                lib,
                decompress: isDecompress,
                encoder,
                legacy: isLegacy,
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                output = process.stdout.fd as any,
                quiet: isQuiet,
                validate: isValidate,
            }: {
                lib: string;
                decompress: boolean;
                encoder: string;
                legacy: boolean;
                output: string;
                quiet: boolean;
                validate: boolean;
            },
        ) => {
            import(lib).then((lzString) => {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const isStdin = file !== (process.stdin.fd as any);
                const {
                    compress,
                    compressToBase64,
                    // compressToCustom,
                    compressToEncodedURIComponent,
                    compressToUint8Array,
                    compressToUTF16,
                    decompress,
                    decompressFromBase64,
                    // decompressFromCustom,
                    decompressFromEncodedURIComponent,
                    decompressFromUint8Array,
                    decompressFromUTF16,
                } = lzString?.default || lzString;
                const compressContent: Record<string, (arg: string) => string> = {
                    base64: compressToBase64,
                    encodeduri: compressToEncodedURIComponent,
                    raw: compress,
                    uint8array: (arg) => convertFromUint8Array(compressToUint8Array(arg)),
                    utf16: compressToUTF16,
                };
                const decompressContent: Record<string, (arg: string) => string> = {
                    base64: decompressFromBase64,
                    encodeduri: decompressFromEncodedURIComponent,
                    raw: decompress,
                    uint8array: (arg) => decompressFromUint8Array(convertToUint8Array(arg, isLegacy)),
                    utf16: decompressFromUTF16,
                };

                if (!isStdin) {
                    if (!existsSync(file)) {
                        if (!isQuiet) process.stderr.write(`Unable to find ${file}\n`);
                        process.exit(1);
                    }
                    try {
                        accessSync(file, constants.R_OK);
                    } catch {
                        if (!isQuiet) process.stderr.write(`Unable to access ${file}\n`);
                        process.exit(1);
                    }
                }

                const unprocessed = loadBinaryFile(file);

                if (unprocessed === undefined) {
                    if (!isQuiet) process.stderr.write(`Unable to read ${isStdin ? "from stdin" : file}\n`);
                    process.exit(1);
                }
                if (!encoders.includes(encoder)) {
                    if (!isQuiet) process.stderr.write(`Unknown encoder ${encoder}\n`);
                    process.exit(1);
                }
                const processed = isDecompress
                    ? decompressContent[encoder](unprocessed)
                    : compressContent[encoder](unprocessed);

                if (isValidate) {
                    const validated = isDecompress
                        ? compressContent[encoder](processed)
                        : decompressContent[encoder](processed);
                    let valid = unprocessed.length === validated.length;

                    for (let i = 0; valid && i < unprocessed.length; i++) {
                        if (unprocessed[i] !== validated[i]) {
                            valid = false;
                        }
                    }
                    if (!valid) {
                        if (!isQuiet) process.stderr.write(`Unable to validate ${file}\n`);
                        process.exit(1);
                    }
                }
                if (processed == null) {
                    if (!isQuiet) process.stderr.write(`Unable to process ${file}\n`);
                    process.exit(1);
                }
                saveBinaryFile(output, processed);
            });
        },
    )
    .parse();
