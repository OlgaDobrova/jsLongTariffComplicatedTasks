const title = "усложненные задания. Урок 2.";
let num = 266219;
let a = 1; //нач значение произведения цифр num

num = String(num);
for (let i = 0; i <= num.length - 1; i++) {
  a *= +num[i];
}
console.log("произведение цифр числа " + num + " = " + a);
a = a ** 3;
console.log("результат, в 3ей степени = " + a);
console.log("первые 2 цифры - это " + String(a).substring(0, 2));
