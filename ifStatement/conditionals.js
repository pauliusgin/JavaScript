let a = Math.random().toFixed(1) * 10;
let b = Math.random().toFixed(1) * 10;
let c = Math.random().toFixed(1) * 10;

console.log("12 ir 13 užduotys kartu:");

console.log(`Pasirinkti skaičiai: ${a}, ${b} ir ${c}`);
if (a === b && b === c) {
    console.log("Skaičiai yra vienodi");
} else if (a >= b && a >= c) {
    console.log(`${a} yra didžiausias`);
} else if (b >= a && b >= c) {
    console.log(`${b} yra didžiausias`);
} else if (c >= a && c >= b) {
    console.log(`${c} yra didžiausias`);
}

if (a <= b && a <= c) {
    console.log(`${a} yra mažiausias`);
} else if (b <= a && b <= c) {
    console.log(`${b} yra mažiausias`);
} else if (c <= a && c <= b) {
    console.log(`${c} yra mažiausias`);
}

console.log(" ");
console.log("======================\n");
console.log("14 užduotis:");
console.log(`Egzaminų rezultatai: ${a}, ${b} ir ${c}`);

let vidurkis = ((a + b + c) / 3).toFixed(2);
console.log(`Vidurkis: ${vidurkis}`);

if (vidurkis <= 10 && vidurkis >= 8) {
    console.log("Geras mokinys");
}
if (vidurkis < 8 && vidurkis >= 5) {
    console.log("Vidutinis mokinys");
}
if (vidurkis < 5) {
    console.log("Prastas mokinys");
}
console.log(" ");
console.log("======================\n");
console.log("15 užduotis:");
console.log(`Pasirinkti skaičiai: ${a} ir ${b}`);
if (a > b || a === 0) {
    console.log("Pirmas skaičius didesnis už antrąjį arba lygus 0");
}
if (b > a || b === 5) {
    console.log("Antras skaičius yra didesnis už pirmąjį arba yra lygus 5");
}
if (a > b && a === 20) {
    console.log("Pirmas skaičius yra didesnis už pirmąjį ir yra lygus 20");
}
if (b > a && b < 100) {
    console.log("Antras skaičius yra didesnis už pirmąjį ir yra mažesnis už 100");
} else if (a === b) {
    console.log("Skaičiai yra vienodi");
}
