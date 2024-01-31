function O(a, p, s) {
  if (a == null)
    return "";
  let o, l;
  const u = {}, d = {};
  let _ = "", x = "", f = "", n = 2, y = 3, c = 2;
  const i = [];
  let e = 0, t = 0, w;
  for (w = 0; w < a.length; w += 1)
    if (_ = a.charAt(w), Object.prototype.hasOwnProperty.call(u, _) || (u[_] = y++, d[_] = !0), x = f + _, Object.prototype.hasOwnProperty.call(u, x))
      f = x;
    else {
      if (Object.prototype.hasOwnProperty.call(d, f)) {
        if (f.charCodeAt(0) < 256) {
          for (o = 0; o < c; o++)
            e = e << 1, t == p - 1 ? (t = 0, i.push(s(e)), e = 0) : t++;
          for (l = f.charCodeAt(0), o = 0; o < 8; o++)
            e = e << 1 | l & 1, t == p - 1 ? (t = 0, i.push(s(e)), e = 0) : t++, l = l >> 1;
        } else {
          for (l = 1, o = 0; o < c; o++)
            e = e << 1 | l, t == p - 1 ? (t = 0, i.push(s(e)), e = 0) : t++, l = 0;
          for (l = f.charCodeAt(0), o = 0; o < 16; o++)
            e = e << 1 | l & 1, t == p - 1 ? (t = 0, i.push(s(e)), e = 0) : t++, l = l >> 1;
        }
        n--, n == 0 && (n = Math.pow(2, c), c++), delete d[f];
      } else
        for (l = u[f], o = 0; o < c; o++)
          e = e << 1 | l & 1, t == p - 1 ? (t = 0, i.push(s(e)), e = 0) : t++, l = l >> 1;
      n--, n == 0 && (n = Math.pow(2, c), c++), u[x] = y++, f = String(_);
    }
  if (f !== "") {
    if (Object.prototype.hasOwnProperty.call(d, f)) {
      if (f.charCodeAt(0) < 256) {
        for (o = 0; o < c; o++)
          e = e << 1, t == p - 1 ? (t = 0, i.push(s(e)), e = 0) : t++;
        for (l = f.charCodeAt(0), o = 0; o < 8; o++)
          e = e << 1 | l & 1, t == p - 1 ? (t = 0, i.push(s(e)), e = 0) : t++, l = l >> 1;
      } else {
        for (l = 1, o = 0; o < c; o++)
          e = e << 1 | l, t == p - 1 ? (t = 0, i.push(s(e)), e = 0) : t++, l = 0;
        for (l = f.charCodeAt(0), o = 0; o < 16; o++)
          e = e << 1 | l & 1, t == p - 1 ? (t = 0, i.push(s(e)), e = 0) : t++, l = l >> 1;
      }
      n--, n == 0 && (n = Math.pow(2, c), c++), delete d[f];
    } else
      for (l = u[f], o = 0; o < c; o++)
        e = e << 1 | l & 1, t == p - 1 ? (t = 0, i.push(s(e)), e = 0) : t++, l = l >> 1;
    n--, n == 0 && (n = Math.pow(2, c), c++);
  }
  for (l = 2, o = 0; o < c; o++)
    e = e << 1 | l & 1, t == p - 1 ? (t = 0, i.push(s(e)), e = 0) : t++, l = l >> 1;
  for (; ; )
    if (e = e << 1, t == p - 1) {
      i.push(s(e));
      break;
    } else
      t++;
  return i.join("");
}
export {
  O as _compress
};
//# sourceMappingURL=_compress.js.map
