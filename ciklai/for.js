// užduotys

// 1.
console.log("1. Ciklas nuo 0 iki 10");
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
console.log("=================\n");

// 2.
console.log("2. Kas antras skaičius nuo 0 iki 15");
for (let i = 0; i <= 15; i += 2) {
    console.log(i);
}
console.log("=================\n");

// 3.
console.log("3. Kas trečias skaičius nuo 1 iki 20");
for (let i = 1; i <= 20; i += 3) {
    console.log(`[${i}]`);
}
console.log("=================\n");

// 4.
console.log("4. Patikrinimas, ar skaičiai dalinasi iš 4");
for (let i = 1; i <= 20; i++) {
    if (i % 4 === 0) {
        console.log(`${i} dalinasi iš 4.`);
    }
}
console.log("=================\n");

// 5.
console.log("5. Rėžiai, skaičiai ir skaičių kvadratai.");

let pradzia = 3;
let pabaiga = 6;
console.log(`Pradžia: ${pradzia}, pabaiga: ${pabaiga}`);

if (pradzia < pabaiga) {
    for (let i = pradzia; i <= pabaiga; i++) {
        console.log(`Skaičius: ${i}, skaičius kvadratu: ${i * i}`);
    }
}
console.log("=================\n");

// 6.
console.log("6. Rėžiai, nelyginiai skaičiai ir dalyba iš 8.");

let a = 5;
let b = 20;
console.log(`Pradžia: ${a}, pabaiga: ${b}`);

if (a < b) {
    for (let i = a; i <= b; i++) {
        if (i % 2 === 1) {
            console.log(`Skaičius ${i} yra nelyginis.`);
        }
        if (i % 8 === 0) {
            console.log(`Skaičius ${i} dalinasi iš 8.`);
        }
    }
}
console.log("=================\n");

// 7.
console.log("7. Daugyba be daugybos");

let x = Math.floor(Math.random() * 10);
let y = Math.floor(Math.random() * 10);
console.log(`Pasirinkti skaičiai: ${x} ir ${y}`);

let sandauga = 0;
for (let i = 0; i < y; i++) {
    sandauga = sandauga + x;
}
console.log(`Sandauga: ${sandauga}`);

console.log("=================\n");

// 8.
console.log("8. Skaičių nuo 1 iki 100 suma");

let suma = 0;

for (let i = 1; i <= 100; i++) {
    suma = suma + i;
}
console.log(suma);

console.log("=================\n");

// 9.
console.log("9. Lyginių skaičių suma");

let sumaLyginiai = 0;

for (let i = 20; i <= 50; i += 2) {
    sumaLyginiai += i;
}
console.log(sumaLyginiai);

console.log("=================\n");

// 10.
console.log("10. Nelyginių skaičių suma");

let sumOdd = 0;

for (let i = 30; i <= 60; i++) {
    if (i % 2 === 1) {
        sumOdd += i;
    }
}
console.log(sumOdd);

console.log("=================\n");

// 11.
console.log("11. Skaičių iki 1000 suma");

let sum1000 = 0;

for (let i = 1; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        sum1000 += i;
    }
}
console.log(sum1000);

console.log("=================\n");

// 12.
console.log("12. FizzBuzz");

for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log("FizzBuzz");
    } else if (i % 5 === 0 && i % 3 !== 0) {
        console.log("Buzz");
    } else if (i % 3 === 0 && i % 5 !== 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}

console.log("=================\n");

// 13.
console.log("13. Fibonacci seka");

let num1 = 1;
let num2 = 1;
let numFib;

console.log(num1);
console.log(num2);

for (let i = 2; i < 10; i++) {
    numFib = num1 + num2;
    console.log(numFib);
    num1 = num2;
    num2 = numFib;
}
