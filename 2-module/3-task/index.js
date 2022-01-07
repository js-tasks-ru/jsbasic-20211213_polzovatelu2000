// let calculator = {
//   read(a,b){
//     calculator.read.a = a;
//     calculator.read.b = b;
//   },
//   sum(){
//     return calculator.read.a + calculator.read.b
//   },
//   mul(){
//     return calculator.read.a * calculator.read.b
//   }
// };
let calculator = {
  read(a,b){
    this.a = a;
    this.b = b;
  },
  sum(){
    return this.a + this.b
  },
  mul(){
    return this.a * this.b
  }
};
// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
