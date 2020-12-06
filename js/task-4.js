// Напиши функцию formatString(string) которая принимает строку и форматирует ее если необходимо.

// Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
// Если длина больше 40 символов, то функция обрезает строку до 40-ка символов и добавляет в конец строки троеточие '...', после чего возвращает укороченную версию.
// const formatString = function(string) {
//   // твой код
// };


// const formatString = function(string) {
//   if (string.length <= 40) {
//     return string;
//   } else {
//     const str = string.split('', 40);
//      string = str.join('')+'...';
//     return string;

//  } 
// };


// const formatString = function(string) {
//   if (string.length > 40) {
//     const str = string.split('', 40);
//     string = str.join('') + '...';
//   }
//     return string;

//  } 

const formatString = function(string) {
  const str = string.split('');
 
  if (string.length <= 40) {
    return string;
  } else {
    string = str.join('') + '...';
    return string;
  }
  
   };

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка


// console.log(clients.join('')+'...'; // "Mango Poly Ajax"