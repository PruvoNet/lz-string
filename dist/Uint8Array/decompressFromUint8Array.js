import { decompress as o } from "../raw/decompress.js";
import { convertFromUint8Array as t } from "./utils.js";
function m(r) {
  return r == null ? o(r) : o(t(r));
}
export {
  m as decompressFromUint8Array
};
//# sourceMappingURL=decompressFromUint8Array.js.map
