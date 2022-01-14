function camelize(str) {
  if(str.indexOf("-")>=0){
    while(true){
      let c = str.slice(str.indexOf("-") + 1)
      str = str.slice(0, str.indexOf("-"))
      c = c[0].toUpperCase() + c.slice(1)
      str = str + c;
    if(str.indexOf("-") === -1)break;
    }
  }
  return str
}
