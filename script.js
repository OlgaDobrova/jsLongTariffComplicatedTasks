"use strict";
//Это Урок №4 усложненные задания

const transformString = function (variable) {
  //если передана строка, то
  //удаление пробелов в начале и в конце строки
  //обрезка строки до 30 символов, потом ...
  variable =
    typeof variable !== "string"
      ? "передана переменная типа " + typeof variable
      : variable.trim().length >= 30
      ? variable.trim().substring(0, 30) + "..."
      : variable.trim().substring(0, variable.trim().length) + "...";
  return variable;
};

console.log(transformString(123));
console.log(transformString(7 + 5));
console.log(transformString(7 > 5));
console.log(transformString("Карл у Клары украл кораллы"));
console.log(
  transformString("Карл у Клары украл кораллы, Клара у Карла украла кларнет")
);
