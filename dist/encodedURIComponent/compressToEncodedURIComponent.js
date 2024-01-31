import { _compress as e } from "../_compress.js";
import t from "./keyStrUriSafe.js";
function c(r) {
  return r == null ? "" : e(r, 6, (o) => t.charAt(o));
}
export {
  c as compressToEncodedURIComponent
};
//# sourceMappingURL=compressToEncodedURIComponent.js.map
