import { _decompress as t } from "../_decompress.js";
function l(r) {
  return r == null ? "" : r == "" ? null : t(r.length, 16384, (n) => r.charCodeAt(n) - 32);
}
export {
  l as decompressFromUTF16
};
//# sourceMappingURL=decompressFromUTF16.js.map
