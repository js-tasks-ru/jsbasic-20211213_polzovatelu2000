function filterRange(arr, a, b) {
  let c = []
  c.push(Math.abs(arr.indexOf(a)))
  c.push(Math.abs(arr.indexOf(b)))
  return c
}