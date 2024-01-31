import { _decompress as t } from "../_decompress.js";
function l(r) {
  return r == null ? "" : r == "" ? null : t(r.length, 32768, (n) => r.charCodeAt(n));
}
export {
  l as decompress
};
//# sourceMappingURL=decompress.js.map
