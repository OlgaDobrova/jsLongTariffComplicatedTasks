"use strict";
// Урок 06 - усложненное задание

// Игровой бот - загадывание случайного числа от 1 до 100

//случайное число от 1 до 100
let rollback = Math.floor(Math.random() * 100 + 1);

const showTypeOff = function (variable) {
  return variable + " " + typeof variable;
};

// проверка: это число? -> true/false
const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

//Ф-ция Конец игры
const gameOut = function (str, int) {
  let question = confirm(
    str + "\n" + "Было загадано число " + String(int) + "\n" + "Повторим?"
  );
  if (question == true) {
    rollback = Math.floor(Math.random() * 100 + 1);
    randomNumberGame(rollback, 10);
  } else {
    alert("Игра окончена.");
  }
};

const randomNumberGame = function (e, counter) {
  let number = prompt("Угадайте число от 1 до 100", "введите число");

  const searchingDecisions = function (num, count) {
    if (count > 1 && (!isNaN(parseFloat(num)) || typeof num == "string")) {
      // if (!isNaN(parseFloat(num)) || typeof num == "string") {
      let newNum;
      while (!isNumber(num) && num !== null) {
        num = prompt(
          "Введите число от 1 до 100",
          "введите число (убедитесь, что нет пробелов, букв и спец.символов)"
        );
      }
      if (num == null) {
        gameOut("Вы нажали кнопку Отмена", e);
      }
      num = parseFloat(num);
      switch (true) {
        case num < e:
          count--;
          newNum = prompt(
            "Загаданное число больше, чем " +
              String(num) +
              "\n" +
              "Осталось попыток - " +
              String(count)
          );
          searchingDecisions(newNum, count);
          break;
        case num > e:
          count--;
          newNum = prompt(
            "Загаданное число меньше, чем " +
              String(num) +
              "\n" +
              "Осталось попыток - " +
              String(count)
          );
          searchingDecisions(newNum, count);
          break;
        case num == e:
          gameOut("Поздравляю, Вы угадали!!!", e);
          break;
      }
    } else if (count == 1) {
      gameOut("Попытки закончились.", e);
    } else {
      gameOut("Вы нажали кнопку отмена", e);
    }
  };

  searchingDecisions(number, counter);
};

randomNumberGame(rollback, 10);
