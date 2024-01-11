// 1.
console.log("1. Užduotis:");

let studentai = [
    "Paulius",
    "Tomas",
    "Reda",
    "Donatas",
    "Rita",
    "Edgaras",
    "Ugnius",
];

console.log("Studentai:", studentai);
console.log("Pirmas studentas:", studentai[0]);
console.log("Paskutinis studentas:", studentai[studentai.length - 1]);
console.log("Du studentai iš vidurio:", studentai[3], "ir", studentai[4]);
console.log("Iš viso studentų:", studentai.length);

console.log("===========================\n");

// 2.
console.log("2. Užduotis:");

let mokiniai = Array.from(studentai);
console.log("Mokiniai:", mokiniai);
mokiniai[0] = "Evaldas";
mokiniai[1] = "Žilvinas";
mokiniai[2] = "Olesia";
console.log("Pakeisti mokiniai: ", mokiniai);

console.log("===========================\n");

// 3.
console.log("3. Užduotis:");

let spalvos = [];
console.log("Tuščia:", spalvos);

spalvos.push("raudona");
spalvos.push("geltona");
spalvos.push("juoda");

console.log("Užpildyta:", spalvos);

console.log("===========================\n");

// 4.
console.log("4. Užduotis:");

let numbers = [];
console.log("Tuščia:", numbers);

for (let i = 0; i < 5; i++) {
    numbers.push(Math.floor(Math.random() * 10));
}

console.log("Užpildyta:", numbers);

console.log("===========================\n");

// 5.
console.log("5. Užduotis:");

let grades1 = [];
let grades2 = [];

for (let i = 0; i < 3; i++) {
    grades1.push(Math.ceil(Math.random() * 10));
    grades2.push(Math.ceil(Math.random() * 10));
}

console.log("Pirmo studento pažymiai:", grades1);
let mean1 = ((grades1[0] + grades1[1] + grades1[2]) / 3).toFixed(1);
console.log("Pirmo studento vidurkis:", mean1);
console.log(" ");

console.log("Antro studento pažymiai:", grades2);
let mean2 = ((grades2[0] + grades2[1] + grades2[2]) / 3).toFixed(1);
console.log("Antro studento vidurkis:", mean2);
console.log(" ");

if (mean1 > mean2) {
    console.log("Pirmo studento pažymių vidurkis didesnis.");
} else if (mean2 > mean1) {
    console.log("Antro studento pažymių vidurkis didesnis.");
} else {
    console.log("Studentų pažymių vidurkiai vienodi.");
}

console.log("===========================\n");

// 6.
console.log("6. Užduotis:");

let studijos = ["kepėjai", "traktoristai", "programuotojai", "vairuotojai"];

console.log("Studijų programos:");
for (let i = 0; i < studijos.length; i++) {
    console.log(`${i + 1}. ${studijos[i]}`);
}

console.log("===========================\n");

// 7.
console.log("7. Užduotis:");

let countries = ["Lietuva", "Estija", "Latvija", "Lenkija"];

for (let i = 0; i < countries.length; i++) {
    console.log("Šalis: ", countries[i]);
}

console.log("===========================\n");

// 8.
console.log("8. Užduotis:");

let projects = ["E-shop", "FB clone", "Youtube clone", "Netflix clone"];

for (let i = 0; i < projects.length; i++) {
    console.log(`${i + 1}-as projektas: ${projects[i]}`);
}

console.log("===========================\n");

// 9.
console.log("9. Užduotis:");

let skaiciai = [];
for (let i = 0; i < 10; i++) {
    skaiciai.push(Math.floor(Math.random() * 10));
}
console.log("Pradiniai skaičiai: ", skaiciai);

console.log("Skaičiai, didesni už 5:");
let skaiciaiDidesniUz5 = [];
for (let i = 0; i < skaiciai.length; i++) {
    if (skaiciai[i] > 5) {
        skaiciaiDidesniUz5.push(skaiciai[i]);
    }
}
console.log(skaiciaiDidesniUz5);

console.log("===========================\n");

// 10.
console.log("10. Užduotis:");

console.log("Pradiniai skaičiai: ", skaiciai);

console.log("Skaičių, besidalinančių iš 4, suma:");
let sumaIs4 = 0;
for (let i = 0; i < skaiciai.length; i++) {
    if (skaiciai[i] % 4 === 0) {
        sumaIs4 += skaiciai[i];
    }
}
console.log(sumaIs4);

console.log("===========================\n");

// 11.
console.log("11. Užduotis:");

let pazymiai = [];
for (let i = 0; i < 10; i++) {
    pazymiai.push(Math.ceil(Math.random() * 10));
}
console.log("Pažymiai:", pazymiai);

let pazymiuSuma = 0;
for (let i = 0; i < pazymiai.length; i++) {
    pazymiuSuma += pazymiai[i];
}
console.log("Pažymių vidurkis:", pazymiuSuma / pazymiai.length);

console.log("===========================\n");

// 12.
console.log("12. Užduotis:");

console.log("Pažymiai:", pazymiai);

console.log("Pažymių vidurkis:", pazymiuSuma / pazymiai.length);

let pazymiaiDidesniUzVidurki = [];
for (let i = 0; i < pazymiai.length; i++) {
    if (pazymiai[i] > pazymiuSuma / pazymiai.length) {
        pazymiaiDidesniUzVidurki.push(pazymiai[i]);
    }
}
console.log("Pažymiai, didesni už vidurkį:", pazymiaiDidesniUzVidurki);
