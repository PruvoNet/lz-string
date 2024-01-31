import { _compress as o } from "./_compress.js";
import { _decompress as r } from "./_decompress.js";
import { compressToBase64 as m } from "./base64/compressToBase64.js";
import { decompressFromBase64 as e } from "./base64/decompressFromBase64.js";
import { compressToCustom as s } from "./custom/compressToCustom.js";
import { decompressFromCustom as p } from "./custom/decompressFromCustom.js";
import { compressToEncodedURIComponent as t } from "./encodedURIComponent/compressToEncodedURIComponent.js";
import { decompressFromEncodedURIComponent as i } from "./encodedURIComponent/decompressFromEncodedURIComponent.js";
import { loadBinaryFile as c, saveBinaryFile as f } from "./node.js";
import { compress as n } from "./raw/compress.js";
import { decompress as d } from "./raw/decompress.js";
import { compressToUint8Array as a } from "./Uint8Array/compressToUint8Array.js";
import { decompressFromUint8Array as F } from "./Uint8Array/decompressFromUint8Array.js";
import { convertFromUint8Array as T, convertToUint8Array as U } from "./Uint8Array/utils.js";
import { compressToUTF16 as y } from "./UTF16/compressToUTF16.js";
import { decompressFromUTF16 as l } from "./UTF16/decompressFromUTF16.js";
const w = {
  _compress: o,
  _decompress: r,
  compress: n,
  compressToBase64: m,
  compressToCustom: s,
  compressToEncodedURIComponent: t,
  compressToUint8Array: a,
  compressToUTF16: y,
  convertFromUint8Array: T,
  convertToUint8Array: U,
  decompress: d,
  decompressFromBase64: e,
  decompressFromCustom: p,
  decompressFromEncodedURIComponent: i,
  decompressFromUint8Array: F,
  decompressFromUTF16: l,
  loadBinaryFile: c,
  saveBinaryFile: f
};
export {
  w as default
};
//# sourceMappingURL=index.js.map
