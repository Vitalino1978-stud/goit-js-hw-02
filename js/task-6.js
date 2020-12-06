let input = 0;
const numbers = [];
let total = 0;


while (input !== null) {
  input = prompt(`Введите число`);
  if (Number.isNaN(Number(input))) {
    alert(`Веедено не число, попробуйте еще раз`);
  } else {
    numbers.push(Number(input));
  }
 
}
//for (let i = 0; i < numbers.length; i++) {
  //total += numbers[i];
//}

for (const number of numbers) {
  total += number;
}



console.log(total);
  


