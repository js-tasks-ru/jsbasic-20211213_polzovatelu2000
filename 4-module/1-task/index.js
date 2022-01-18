function makeFriendsList(friends) {
  let ul = document.createElement('ul')
  for(i in friends){
    let li = document.createElement('li')
    li.append(friends[i].firstName +" "+friends[i].lastName)
    ul.append(li)
  }
  return ul
}
