const title = "Это усложненные задания";
let lang = "ru"; //lang может принимать только 2 значения!: 'ru' 'en'
let langArray = [
  ["ru", "пн, вт, ср, чт, пт, сб, вс"],
  ["en", "mo, tu, we, th, fr, sa, su"],
];
let namePerson = "Александр";
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
lang == langArray[0][0]
  ? console.log(langArray[0][1])
  : console.log(langArray[1][1]);
namePerson == "Артем"
  ? console.log("директор")
  : namePerson == "Александр"
  ? console.log("преподаватель")
  : console.log("студент");
