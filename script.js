"use strict";
//Это Урок №5 усложненное задание №1

const showTypeOff = function (variable) {
  return variable + " " + typeof variable;
};
//вывод в переменную числа, после проверки: число ли это?
const isNumber = function (variable) {
  // проверка: это число? -> true/false
  if (!isNaN(parseFloat(variable)) && isFinite(variable)) {
    variable = parseFloat(variable);
  } else {
    variable = 0;
  }
  return variable;
};

console.log(showTypeOff(isNumber(123)));
console.log(showTypeOff(isNumber("   123   ")));
console.log(showTypeOff(isNumber(0)));
console.log(showTypeOff(isNumber(NaN)));
console.log(showTypeOff(isNumber("   123asdddd")));
