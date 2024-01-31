import { _compress as s } from "../_compress.js";
import c from "./keyStrBase64.js";
function a(e) {
  if (e == null)
    return "";
  const r = s(e, 6, (t) => c.charAt(t));
  switch (r.length % 4) {
    default:
    case 0:
      return r;
    case 1:
      return r + "===";
    case 2:
      return r + "==";
    case 3:
      return r + "=";
  }
}
export {
  a as compressToBase64
};
//# sourceMappingURL=compressToBase64.js.map
