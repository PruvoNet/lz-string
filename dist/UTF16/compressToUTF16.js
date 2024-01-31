import { _compress as e } from "../_compress.js";
function n(r) {
  return r == null ? "" : e(r, 15, (o) => String.fromCharCode(o + 32)) + " ";
}
export {
  n as compressToUTF16
};
//# sourceMappingURL=compressToUTF16.js.map
