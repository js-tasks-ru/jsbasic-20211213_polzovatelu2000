function ucFirst(str) {
  if(str.length<=1){
    return str.toUpperCase()
  }
  else{
    let n = str.slice(0,1).toUpperCase()
    return str = n+str.slice(1)
  }
}
