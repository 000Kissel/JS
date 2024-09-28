let value = true;
// Проверка значения типа:
console.log(typeof (value));

// String - Строковое преобразование:
value = String(value);
console.log(typeof (value));

// Численное преобразование:
let a = "10";
let b = "20";

console.log(typeof (a));

a = Number(a);
console.log(typeof (a));

console.log(Number(b));

// Преобразование строки в целое число:
a = "12.5 штук";
a = parseInt(a);
console.log(a);
console.log(a + 10);

// Преобразование строки в число с плавающей точкой:

a = "12.5 кг";
a = parseFloat(a);
console.log(a);

// Логическое преобразование:
let x = 1;
let y = 0;
x = Boolean(x);
y = Boolean(y);
console.log(`x = ${x}`);
console.log(`y = ${y}`);


// alert("Привет");
// let result = prompt("сколько тебе лет?", 16);
// console.log(result);

// let isBoss = confirm("Ты здесь главный");
// console.log(isBoss);

// ДЗ №8
let nam1;
nam1 = +prompt('Введите первое число');
console.log(nam1);


// Домашняя работа №2,№3
// let str = "10";
// let str2 = "20.5";
// let str3 = "30.25px";

// console.log(parseInt(str2));
// console.log(Number(str));
// console.log(parseFloat(str3));