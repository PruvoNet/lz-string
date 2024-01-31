function C(S, p, a) {
  const h = [];
  let e = 4, l = 4, w = 3, c = "";
  const v = [];
  let f, d, n, t, r, o, s;
  const i = {
    val: a(0),
    position: p,
    index: 1
  };
  for (f = 0; f < 3; f += 1)
    h[f] = String(f);
  for (n = 0, r = Math.pow(2, 2), o = 1; o != r; )
    t = i.val & i.position, i.position >>= 1, i.position == 0 && (i.position = p, i.val = a(i.index++)), n |= (t > 0 ? 1 : 0) * o, o <<= 1;
  switch (n) {
    case 0:
      for (n = 0, r = Math.pow(2, 8), o = 1; o != r; )
        t = i.val & i.position, i.position >>= 1, i.position == 0 && (i.position = p, i.val = a(i.index++)), n |= (t > 0 ? 1 : 0) * o, o <<= 1;
      s = String.fromCharCode(n);
      break;
    case 1:
      for (n = 0, r = Math.pow(2, 16), o = 1; o != r; )
        t = i.val & i.position, i.position >>= 1, i.position == 0 && (i.position = p, i.val = a(i.index++)), n |= (t > 0 ? 1 : 0) * o, o <<= 1;
      s = String.fromCharCode(n);
      break;
    case 2:
      return "";
  }
  if (s === void 0)
    throw new Error("No character found");
  for (h[3] = String(s), d = String(s), v.push(String(s)); ; ) {
    if (i.index > S)
      return "";
    for (n = 0, r = Math.pow(2, w), o = 1; o != r; )
      t = i.val & i.position, i.position >>= 1, i.position == 0 && (i.position = p, i.val = a(i.index++)), n |= (t > 0 ? 1 : 0) * o, o <<= 1;
    switch (s = n) {
      case 0:
        for (n = 0, r = Math.pow(2, 8), o = 1; o != r; )
          t = i.val & i.position, i.position >>= 1, i.position == 0 && (i.position = p, i.val = a(i.index++)), n |= (t > 0 ? 1 : 0) * o, o <<= 1;
        h[l++] = String.fromCharCode(n), s = l - 1, e--;
        break;
      case 1:
        for (n = 0, r = Math.pow(2, 16), o = 1; o != r; )
          t = i.val & i.position, i.position >>= 1, i.position == 0 && (i.position = p, i.val = a(i.index++)), n |= (t > 0 ? 1 : 0) * o, o <<= 1;
        h[l++] = String.fromCharCode(n), s = l - 1, e--;
        break;
      case 2:
        return v.join("");
    }
    if (e == 0 && (e = Math.pow(2, w), w++), h[s])
      c = String(h[s]);
    else if (s === l)
      c = d + d.charAt(0);
    else
      return null;
    v.push(c), h[l++] = d + c.charAt(0), e--, d = c, e == 0 && (e = Math.pow(2, w), w++);
  }
}
export {
  C as _decompress
};
//# sourceMappingURL=_decompress.js.map
