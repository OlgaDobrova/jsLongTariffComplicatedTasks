"use strict";
const date = new Date();
const currentDayOfWeek = date.getDay();

const week = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];

let weekRow = document.querySelector(".weekRow");
let weekColumn = document.querySelector(".weekColumn");
let weekRowItalic = document.querySelector(".weekRowItalic");
let weekRowBold = document.querySelector(".weekRowBold");
let dayOfWeek = "";
let dayOfWeekItalic = "";
let dayOfWeekBold = "";

for (let i = 0; i < week.length; i++) {
  dayOfWeek += String(week[i]) + "</br>";
  if (i == 5 || i == 6) {
    dayOfWeekItalic += `<i>` + String(week[i]) + `</i>` + " ";
  } else {
    dayOfWeekItalic += String(week[i]) + " ";
  }
  if (i + 1 == currentDayOfWeek) {
    dayOfWeekBold += `<b>` + String(week[i]) + `</b>` + " ";
  } else {
    dayOfWeekBold += String(week[i]) + " ";
  }
}

weekRow.innerHTML = "// Вывод массива" + "</br>" + String(week);
weekColumn.innerHTML =
  "</br>" + "// Каждый день недели с новой строки" + "</br>" + dayOfWeek;
weekRowItalic.innerHTML =
  "</br>" + "// Выходне дни - курсивом" + "</br>" + dayOfWeekItalic;
weekRowBold.innerHTML =
  "</br>" + "// Текущий день недели - жирным шрифтом" + "</br>" + dayOfWeekBold;
