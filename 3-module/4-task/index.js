function showSalary(users, age) {
  return users.filter(item => item.age <= age).map(u => `${u.name}, ${u.balance}`).join("\n")
}
