import { compress as f } from "../raw/compress.js";
function p(l, t) {
  if (l == null)
    return "";
  const h = f(l), a = Math.ceil(Math.log(65536) / Math.log(t.length));
  let n = "";
  for (let o = 0, s = h.length; o < s; o++) {
    let r = h.charCodeAt(o);
    for (let e = a - 1; e >= 0; e--) {
      const c = Math.floor(r / Math.pow(t.length, e));
      r = r % Math.pow(t.length, e), n += t.charAt(c);
    }
  }
  return n;
}
export {
  p as compressToCustom
};
//# sourceMappingURL=compressToCustom.js.map
