import { _decompress as o } from "../_decompress.js";
import { getBaseValue as m } from "../getBaseValue.js";
import t from "./keyStrUriSafe.js";
function n(r) {
  return r == null ? "" : r == "" ? null : (r = r.replace(/ /g, "+"), o(r.length, 32, (e) => m(t, r.charAt(e))));
}
export {
  n as decompressFromEncodedURIComponent
};
//# sourceMappingURL=decompressFromEncodedURIComponent.js.map
