import { compress as s } from "../raw/compress.js";
function i(n) {
  const t = s(n), e = new Uint8Array(t.length * 2);
  for (let r = 0, c = t.length; r < c; r++) {
    const o = t.charCodeAt(r);
    e[r * 2] = o >>> 8, e[r * 2 + 1] = o % 256;
  }
  return e;
}
export {
  i as compressToUint8Array
};
//# sourceMappingURL=compressToUint8Array.js.map
