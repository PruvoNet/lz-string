import { _compress as e } from "../_compress.js";
function n(r) {
  return r == null ? "" : e(r, 16, (o) => String.fromCharCode(o));
}
export {
  n as compress
};
//# sourceMappingURL=compress.js.map
