const checkForSpam = function(message) {
  const messageCheck = message.toLowerCase().split(' ');
  for (let i = 0; i < messageCheck.length; i++) {
    if (messageCheck[i].includes("spam") || messageCheck[i].includes("sale")) {
      return true;
    }
  }
  return false;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true