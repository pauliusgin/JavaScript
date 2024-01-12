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

console.log("===========================\n");

// 13.
console.log("13. Užduotis:");
console.log("Atsitiktiniai skaičiai:");
let squared = [];

for (let i = 0; i < 10; i++) {
    squared.push(Math.ceil(Math.random() * 10));
}
for (let i = 0; i < squared.length; i++) {
    if (squared[i] % 2 === 0) {
        console.log(
            `Skaičius: ${squared[i]}, kvadratas: ${squared[i] * squared[i]}`,
        );
    } else {
        console.log(`Skaičius: ${squared[i]}`);
    }
}

console.log("===========================\n");

// 14.
console.log("14. Užduotis:");

console.log("Studento pažymiai:");
let studentoPazymiai = [];
for (let i = 0; i < 10; i++) {
    studentoPazymiai.push(Math.ceil(Math.random() * 10));
}

for (let i = 0; i < studentoPazymiai.length; i++) {
    if (studentoPazymiai[i] >= 5) {
        console.log(`${studentoPazymiai[i]} - teigiamas balas.`);
    } else if (studentoPazymiai[i] === 4) {
        console.log("4 - neigiamas balas, iki teigiamo pritrūko 1 balo.");
    } else {
        console.log(
            `${studentoPazymiai[i]} - neigiamas balas, iki teigiamo pritrūko ${5 - studentoPazymiai[i]
            } balų.`,
        );
    }
}

console.log("===========================\n");

// 15.
console.log("15. Užduotis:");

let zodziai = ["vienas", "du", "ratai", "batai", "trinitrotoluolas"];

let raidziuSuma = 0;

for (let i = 0; i < zodziai.length; i++) {
    console.log(`${zodziai[i]} - žodis iš ${zodziai[i].length} raidžių. `);
    raidziuSuma += zodziai[i].length;
}
console.log(`Visus žodžius kartu sudaro ${raidziuSuma} raidės.`);

console.log("===========================\n");

// 16.
console.log("16. Užduotis:");

let skaiciaiTrys = [];

for (let i = 0; i < 10; i++) {
    skaiciaiTrys.push(Math.ceil(Math.random() * 10));
}
console.log("Skaičiai:", skaiciaiTrys);

let skaiciaiTrysSuma = 0;
let skaiciuKiekis = 0;
for (let i = 0; i < skaiciaiTrys.length; i++) {
    if (skaiciaiTrys[i] % 3 === 0) {
        skaiciaiTrysSuma += skaiciaiTrys[i];
        skaiciuKiekis++;
    }
}
console.log(`Skaičių, kurie dalinasi iš 3, suma: ${skaiciaiTrysSuma}`);
console.log(
    `Skaičių, kurie dalinasi iš 3, vidurkis: ${skaiciaiTrysSuma / skaiciuKiekis}`,
);

console.log("===========================\n");

// 17.
console.log("17. Užduotis:");

let zodziai17 = ["visi", "porom", "as", "uz", "tvoros"];

for (let zodis in zodziai17) {
    console.log(`${zodis} - ${zodziai[zodis]}`);
}

console.log("===========================\n");

// 18.
console.log("18. Užduotis:");

let produktai = ["duona", "pienas", "vanduo", "sūris", "mėsa"];

console.log(`Pirkinių sąraše yra ${produktai.length} produktai:`);
for (let produktas of produktai) {
    console.log(`- ${produktas}`);
}

console.log("===========================\n");

// 19.
console.log("19. Užduotis:");

console.log("Studento pažymiai:", studentoPazymiai);

let studentoPazymiuSuma = 0;
for (let pazymys of studentoPazymiai) {
    studentoPazymiuSuma += pazymys;
}
console.log(
    "Studento pažymių vidurkis:",
    studentoPazymiuSuma / studentoPazymiai.length,
);

console.log("===========================\n");

// 20.
console.log("20. Užduotis:");

let kelione = [];
for (let i = 0; i < 10; i++) {
    kelione.push(Math.ceil(Math.random() * 300));
}
console.log("Nuvažiuota per dieną, km:", kelione);

console.log("Daugiau nei 150km:");
for (let diena of kelione) {
    if (diena > 150) {
        console.log(diena);
    }
}

console.log("===========================\n");

// 21.
console.log("21. Užduotis:");

let failai = [
    "nuotrauka.jpg",
    "sąskaitos.xls",
    "sąrašas.txt",
    "duomenys.json",
    "filmas.mkv",
];
console.log("Failai:", failai);

let reikalingiFailai = [];
for (let failas of failai) {
    if (failas.endsWith(".txt") || failas.endsWith(".json")) {
        reikalingiFailai.push(failas);
    }
}
console.log("Reikalingi failai:", reikalingiFailai);

console.log("===========================\n");

// 22.
console.log("22. Užduotis:");

let automobiliai = ["Audi", "Jaguar", "Volvo", "Toyota", "BMW"];

for (let automobilis of automobiliai) {
    console.log(automobilis, "-", automobilis.length, "raidės.");
}

console.log("===========================\n");

// 23.
console.log("23. Užduotis:");

let httpCodes = [];

for (let i = 0; i < 10; i++) {
    let first = Math.ceil(Math.random() * 5);
    let second = Math.floor(Math.random() * 10);
    let third = Math.floor(Math.random() * 10);
    let code = `${first}${second}${third}`;
    httpCodes.push(code);
}

console.log(
    "Received HTTP status codes.\nCheck the documentation for details.\n",
);
for (let code of httpCodes) {
    if (code.startsWith("1")) {
        console.log(`${code} - the request was received, continuing process. `);
    } else if (code.startsWith("2")) {
        console.log(
            `${code} - the request was successfully received, understood, and accepted.`,
        );
    } else if (code.startsWith("3")) {
        console.log(
            `${code} - further action needs to be taken in order to complete the request.`,
        );
    } else if (code.startsWith("4")) {
        console.log(
            `${code} - the request contains bad syntax or cannot be fulfilled.`,
        );
    } else if (code.startsWith("5")) {
        console.log(
            `${code} - the server failed to fulfil an apparently valid request.`,
        );
    } else if (code == "418") {
        console.log("I'm a teapot (RFC 2324, RFC 7168)");
    }
}

console.log("===========================\n");

// 24.
console.log("24. Užduotis:");

let prekiuLikuciai = [];
for (let i = 0; i < 10; i++) {
    prekiuLikuciai.push(Math.ceil(Math.random() * 100));
}
console.log("Prekių likučiai:", prekiuLikuciai);

console.log(
    "Per dieną parduodant po 5vnt., likučių užteks maždaug tiek dienų:",
);
for (let likutis of prekiuLikuciai) {
    let dienos = Math.floor(likutis / 5);
    console.log(`${likutis} - ${dienos}d.`);
}

console.log("===========================\n");

// 25.
console.log("25. Užduotis:");

console.log("Studento pažymiai:", studentoPazymiai);

let neigiamuPazymiuKiekis = 0;
console.log("Teigiami pažymiai:");
for (let pazymys of studentoPazymiai) {
    if (pazymys < 5) {
        neigiamuPazymiuKiekis++;
    } else {
        console.log(pazymys);
    }
}

console.log(
    "Studento pažymių vidurkis:",
    studentoPazymiuSuma / studentoPazymiai.length,
);

console.log("Gauta neigiamų pažymių:", neigiamuPazymiuKiekis);

console.log("===========================\n");

// 26.
console.log("26. Užduotis:"); // identiška 5-ai užduočiai

console.log("Pirmo studento pažymiai:", grades1);
console.log("Pirmo studento vidurkis:", mean1);
console.log(" ");

console.log("Antro studento pažymiai:", grades2);
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

// 27.
console.log("27. Užduotis:");

// žodžiai is 15 užduoties
let zodziai27 = Array.from(zodziai);
// papildyti keliais trumpais
zodziai27.push("trys", "ten");

console.log("Žodžiai:", zodziai27);

console.log(" ");

let trumpiZodziai = [];
for (let zodis of zodziai27) {
    if (zodis.length < 5) {
        trumpiZodziai.push(zodis);
    }
}
console.log("Trumpi žodžiai (iki 5 raidžių):", trumpiZodziai);
