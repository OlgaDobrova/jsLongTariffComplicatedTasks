const title = "Это усложненные задания";
const lang = "ru"; //lang может принимать только 2 значения!: 'ru' 'en'
const langArray = [
  ["ru", "пн, вт, ср, чт, пт, сб, вс"],
  ["en", "mo, tu, we, th, fr, sa, su"],
];
const namePerson = "Александр";
console.log(" lang = " + lang);

//a) через if,
if (lang === "ru") {
  console.log("пн, вт, ср, чт, пт, сб, вс");
} else {
  console.log("mo, tu, we, th, fr, sa, su");
}
//b) через switch-case
switch (true) {
  case lang == "ru":
    console.log("пн, вт, ср, чт, пт, сб, вс");
    break;
  case lang == "en":
    console.log("mo, tu, we, th, fr, sa, su");
    break;
  default:
    console.log("нет такого! всего 2 варианта!");
}
//c) через многомерный массив без ифов и switch.
console.log(langArray[1][1]);
//задача про должности с помощью нескольких тернарных операторов
namePerson == "Артем"
  ? console.log("директор")
  : namePerson == "Александр"
  ? console.log("преподаватель")
  : console.log("студент");
