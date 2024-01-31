import { decompress as a } from "../raw/decompress.js";
function g(t, l) {
  if (t == null)
    return "";
  if (t == "" || l.length < 2)
    return null;
  const n = Math.ceil(Math.log(65536) / Math.log(l.length));
  if (t.length % n != 0)
    return null;
  let u = "", r, h;
  for (let e = 0, f = t.length; e < f; e = e + n) {
    r = 0;
    for (let o = 0; o < n; o++)
      h = l.indexOf(t[e + o]), r = r + h * Math.pow(l.length, n - 1 - o);
    u = u + String.fromCharCode(r);
  }
  return a(u);
}
export {
  g as decompressFromCustom
};
//# sourceMappingURL=decompressFromCustom.js.map
