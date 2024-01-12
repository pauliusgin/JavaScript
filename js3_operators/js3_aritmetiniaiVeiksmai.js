console.log("Pirma užduotis:");
let x = 5;
let x2 = x * x;
let x3 = x * x * x;
console.log(
  "Skaičius: " + x,
  "\nSkaičius kvadratu: " + x2,
  "\nSkaičius kubu: " + x3
);
// ================================================================
console.log(" ");
console.log("Antra užduotis:");
let a = 1;
let b = 2;
let c = 3;
let sandauga = a * b * c;
let suma = a + b + c;
console.log("Suma: " + suma, "\nSandauga: " + sandauga);
// ================================================================
console.log();
console.log("Trečia užduotis:");
let d = 5;
let e = 10;
console.log("Skaičiai: " + d + " ir " + e);
console.log("Suma: " + (d + e) + "\nSkirtumas: " + (e - d));
console.log("Sumos ir skirtumo sandauga: " + (e + d) * (e - d));
console.log("Sumos ir skirtumo dalmuo: " + (e + d) / (e - d));
// ================================================================
console.log();
console.log("Ketvirta užduotis:");
let f = 1;
let g = 2;
let h = 3;
let i = 4;
console.log("Skaičiai: " + f + ", " + g + ", " + h + ", " + i);
console.log("Skaičių vidurkis: " + (f + g + h + i) / 4);
// ================================================================
console.log();
console.log("Penkta užduotis:");
console.log("Skaičiai: " + h + " ir " + i);
console.log(h + " + " + i + " = " + (h + i));
console.log(i + " - " + h + " = " + (i - h));
console.log(i + " x " + h + " = " + i * h);
console.log(i + " ÷ " + h + " ≈ " + (i / h).toFixed(2));
// ================================================================
console.log();
console.log("Šešta užduotis:");
console.log("-1 + 4 x 6 = " + (-1 + 4 * 6));
console.log("(35 + 5) ÷ 7 = 40 ÷ 7 ≈ " + ((35 + 5) / 7).toFixed(2));
console.log("14 + -4 x 6 ÷ 12 = 14 + -2 = " + (14 + (-4 * 6) / 12));
console.log(
  "2 + 15 ÷ 6 x 1 - 7 ÷ 2 = 2 + 2.5 - 3.5 = " + (2 + (15 / 6) * 1 - 7 / 2)
);
// ================================================================
console.log();
console.log("Septinta užduotis:");
let y = 5;
console.log("Skaičiaus " + y + " daugybos lentelė:");
let daugybosLentele = (num) => {
  for (i = 1; i < 11; i++) {
    let result = num + " x " + i + " = " + num * i;
    console.log(result);
  }
};
daugybosLentele(y);
// ================================================================
console.log();
console.log("Aštunta užduotis:");
let number = 69;
let firstDigit = Math.floor(number / 10);
let secondDigit = number % 10;
console.log("Dviženklis skaičius: " + number);
console.log("Pirmas skaitmuo: " + firstDigit);
console.log("Antras skaitmuo: " + secondDigit);
