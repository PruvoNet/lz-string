import { writeFileSync as i, readFileSync as o } from "fs";
import { convertToUint8Array as e, convertFromUint8Array as t } from "./Uint8Array/utils.js";
function c(r, n) {
  i(r, typeof n == "string" ? e(n) : n, null);
}
function f(r) {
  return t(o(r, null));
}
export {
  f as loadBinaryFile,
  c as saveBinaryFile
};
//# sourceMappingURL=node.js.map
