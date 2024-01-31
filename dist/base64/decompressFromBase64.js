import { _decompress as o } from "../_decompress.js";
import { getBaseValue as m } from "../getBaseValue.js";
import t from "./keyStrBase64.js";
function a(r) {
  return r == null ? "" : r == "" ? null : o(r.length, 32, (e) => m(t, r.charAt(e)));
}
export {
  a as decompressFromBase64
};
//# sourceMappingURL=decompressFromBase64.js.map
