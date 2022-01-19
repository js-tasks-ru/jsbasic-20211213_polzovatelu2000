function getMinMax(str) {
  str = str.split(" ")
  let d = []
  for(i in str){
    let c = Number(str[i])
    if(c){
      d.push(c)
    }
  }
  let result = {
    min:Math.min.apply(null, d),
    max:Math.max.apply(null, d)
  }
  return result
}
