// function namify(users) {
//   let mas = []
//   for(i in users){
//     mas.push(users[i].name)
//   }
//   return users = mas
// }

// let namify = (users) =>{
//   let mas = []
//     for(i in users){
//       mas.push(users[i].name)
//     }
//     return users = mas
// }

let namify = (users)=>users.map(item => item.name)