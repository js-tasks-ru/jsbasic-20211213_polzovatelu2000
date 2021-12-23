// function factorial(n) {
//   if(n == 0){
//     return n=1
//   }
//   else{
//     for(let s=n-1; s > 1; s--){
//       n*=s
//     }
//     return n;
//   }
// }

function factorial(n) {
  if(n == 0){
    return n=1
  }
  else{
    let s = n
    while(s > 1){
      s--
      n*=s
    }
    return n;
  }
}

