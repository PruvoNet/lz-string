function i(r, o) {
  if (typeof r == "string") {
    const e = !o && r.charCodeAt(r.length - 1) % 256 === 0, n = new Uint8Array(r.length * 2 - (e ? 1 : 0));
    for (let t = 0; t < r.length; t++) {
      const h = r.charCodeAt(t);
      n[t * 2] = h >>> 8, (!e || t < r.length - 1) && (n[t * 2 + 1] = h % 256);
    }
    return n;
  }
  return r;
}
function c(r) {
  const o = Math.floor(r.byteLength / 2), e = [];
  for (let n = 0; n < o; n++)
    e.push(String.fromCharCode(r[n * 2] * 256 + r[n * 2 + 1]));
  return r.byteLength & 1 && e.push(String.fromCharCode(r[r.byteLength - 1] * 256)), e.join("");
}
export {
  c as convertFromUint8Array,
  i as convertToUint8Array
};
//# sourceMappingURL=utils.js.map
