const n = {};
function i(e, c) {
  if (!n[e]) {
    n[e] = {};
    for (let r = 0; r < e.length; r++)
      n[e][e.charAt(r)] = r;
  }
  return n[e][c];
}
export {
  i as getBaseValue
};
//# sourceMappingURL=getBaseValue.js.map
