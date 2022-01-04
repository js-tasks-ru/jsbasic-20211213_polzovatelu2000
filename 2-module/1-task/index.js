function sumSalary(salaries) {
  sum = 0
  for(let i in salaries){
    if(typeof salaries[i] == "number"){
      if(String(salaries[i])==="NaN"||String(salaries[i])==="Infinity"||String(salaries[i])==="-Infinity"){
        delete salaries[i]
      }
      else{
        sum+=salaries[i]
      }
    }
  }
  return salaries = sum
}
