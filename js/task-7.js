
// let inputLogin = 0;
const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login) {
  
  if (login.length >= 4 && login.length <= 16) {
    return false;
  }
  return true;
};

const isLoginUnique = function (allLogins, login) {
  // for (let i = 0; i < logins.length; i++) {
  //   if (allLogins.includes(logins[i]))
  //     return false;
  // }
  // return true;
  return allLogins.includes(login);
};
const addLogin = function(allLogins, login) {
  if (isLoginValid (login) === true) {
    return ('Ошибка! Логин должен быть от 4 до 16 символов');
  }
  if (isLoginUnique(allLogins, login) === true) {
    return('Такой логин уже используется!');
  } else {
  allLogins.push(login);
 return('Логин успешно добавлен!');
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'