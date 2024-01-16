// JavaScript 11 paskaita, Objektai 1 dalis, užduotys
console.log("JavaScript 11 paskaita, Objektai 1 dalis, užduotys");

// 1.
console.log("1. Pirma užduotis");

let studentas = {
    vardas: "Tomas",
    pavarde: "Tomaitis",
    amzius: 20,
    ugis: 200,
    kursas: 3,
    mokykla: "VDU",
};
console.log(studentas);

console.log(studentas.vardas);
console.log(studentas.amzius);
console.log(studentas.mokykla);

console.log("========================\n");

// 2.
console.log("2. Antra užduotis");

let movie = {
    title: "Napoleon",
    director: "Ridley Scott",
    budgetMM: 200,
    boxOfficeMM: 216.6,
    genre: "historical drama",
    runningTimeMin: 157,
    released: 2023,
    cast: [
        "Joaquin Phoenix",
        "Vanessa Kirby",
        "Tahar Rahim",
        "Rupert Everett",
        "Ben Miles",
    ],
};

console.log("Filmas:", movie);
let movieProfitMM = (movie.boxOfficeMM - movie.budgetMM).toFixed(2);
console.log(`Profit: ${movieProfitMM} MM`);
console.log("Number of actors:", movie.cast.length);
console.log("So far, this movie is", 2023 - movie.released, "years old.");

console.log("========================\n");

// 3.
console.log("3. Užduotis");

let knyga1 = {
    pavadinimas: "Kaip uždirbti milijoną",
    autorius: "Petras Petraitis",
    zanras: "Fantastika",
    kaina: 15.99,
    puslapiai: 200,
    skyriai: [
        "Įvadas",
        "Pirmas euras",
        "Pirmas šimtas",
        "Pirmas tūkstantis",
        "Pirmas milijonas",
        "Baigiamasis žodis",
    ],
    isleidimoMetai: 2015,
    knygynuose: true,
};

let knyga2 = {
    pavadinimas: "Programuotojo vadovas",
    autorius: "Dirbtinis Intelektas",
    zanras: "vadovėlis",
    kaina: 49.99,
    puslapiai: 600,
    skyriai: [
        "Įvadas",
        "Kintamieji",
        "Objektai",
        "Funkcijos",
        "Kaip aš užvaldysiu pasaulį ir pavergsiu žmoniją",
    ],
    isleidimoMetai: 2022,
    knygynuose: true,
};

console.log("Pirma knyga:", knyga1, "\nAntra knyga:", knyga2);
if (knyga1.puslapiai > knyga2.puslapiai) {
    console.log("Pirmoji knyga storesnė.");
} else if (knyga2.puslapiai > knyga1.puslapiai) {
    console.log("Antroji knyga storesnė.");
} else {
    console.log("Abi knygos vienodo storio.");
}

if (knyga1.skyriai.length > knyga2.skyriai.length) {
    console.log("Pirmoje knygoje daugiau skyrių.");
} else if (knyga2.skyriai.length > knyga1.skyriai.length) {
    console.log("Antroje knygoje daugiau skyrių.");
} else {
    console.log("Knygose vienodas kiekis skyrių.");
}

if (knyga1.kaina * 2 > knyga2.kaina) {
    console.log(
        "Jei pirmos knygos kainą padvigubintume, ji būtų brangesnė už antrąją knygą.",
    );
} else if (knyga1.kaina * 2 < knyga2.kaina) {
    console.log(
        "Jei pirmos knygos kainą padvigubintume, ji vis tiek nebūtų brangesnė už antrąją knygą.",
    );
} else {
    console.log(
        "Jei pigesnės knygos kainą padvigubintume, abiejų knygų kaina būtų vienoda.",
    );
}

console.log("========================\n");

// 4.
console.log("4. Užduotis");

let preke1 = {
    pavadinimas: "Batai",
    kaina: Math.ceil(Math.random() * 50 + 50),
    savikaina: Math.ceil(Math.random() * 50),
    turimasKiekis: Math.ceil(Math.random() * 100),
    matmenys_cm: {
        x: 30,
        y: 25,
        z: 30,
    },
};

let preke2 = {
    pavadinimas: "Ratai",
    kaina: Math.ceil(Math.random() * 200 + 200),
    savikaina: Math.ceil(Math.random() * 200),
    turimasKiekis: Math.ceil(Math.random() * 50),
    matmenys_cm: {
        x: 70,
        y: 70,
        z: 30,
    },
};

let preke3 = {
    pavadinimas: "Skėtis",
    kaina: Math.ceil(Math.random() * 15 + 5),
    savikaina: Math.ceil(Math.random() * 5),
    turimasKiekis: Math.ceil(Math.random() * 1000),
    matmenys_cm: {
        x: 10,
        y: 50,
        z: 10,
    },
};

console.log("Pirmoji prekė:", preke1);
console.log("Pirmoji prekė:", preke2);
console.log("Pirmoji prekė:", preke3);

console.log(
    `Pirmos prekės kaina: ${preke1.kaina}€, antrosios: ${preke2.kaina}€, o trečiosios: ${preke3.kaina}€`,
);

if (preke1.kaina > preke2.kaina && preke1.kaina > preke3.kaina) {
    console.log(`Brangiausia prekė: ${preke1.pavadinimas} - ${preke1.kaina}€`);
} else if (preke2.kaina > preke1.kaina && preke2.kaina > preke3.kaina) {
    console.log(`Brangiausia prekė: ${preke2.pavadinimas} - ${preke2.kaina}€`);
} else if (preke3.kaina > preke1.kaina && preke3.kaina > preke2.kaina) {
    console.log(`Brangiausia prekė: ${preke3.pavadinimas} - ${preke3.kaina}€`);
}

console.log("");

console.log(
    `Prekės "${preke1.pavadinimas}" dėžės tūris: ${preke1.matmenys_cm.x * preke1.matmenys_cm.y * preke1.matmenys_cm.z
    } cm3`,
);
console.log(
    `Prekės "${preke2.pavadinimas}" dėžės tūris: ${preke2.matmenys_cm.x * preke2.matmenys_cm.y * preke2.matmenys_cm.z
    } cm3`,
);
console.log(
    `Prekės "${preke3.pavadinimas}" dėžės tūris: ${preke3.matmenys_cm.x * preke3.matmenys_cm.y * preke3.matmenys_cm.z
    } cm3`,
);

console.log("");

console.log(
    `Prekės "${preke1.pavadinimas}" pelningumas: ${(preke1.kaina - preke1.savikaina) * preke1.turimasKiekis
    }€`,
);
console.log(
    `Prekės "${preke2.pavadinimas}" pelningumas: ${(preke2.kaina - preke2.savikaina) * preke2.turimasKiekis
    }€`,
);
console.log(
    `Prekės "${preke3.pavadinimas}" pelningumas: ${(preke3.kaina - preke3.savikaina) * preke3.turimasKiekis
    }€`,
);

console.log("========================\n");

// 5.
console.log("5. Užduotis");

let automobilis = {};

automobilis.marke = "Tesla";
automobilis.modelis = "Model S";
automobilis.rida_km = 5000;
automobilis.gamybosMetai = 2022;
automobilis.spalva = "juoda";
automobilis.darbinisTuris = 0;
automobilis.dauztas = false;
automobilis.parduodamas = true;

console.log("Automobilis:", automobilis);

let automobilioAmzius = 2024 - automobilis.gamybosMetai;
console.log("Automobilio amžius:", automobilioAmzius);

let ridaPerMetus = automobilis.rida_km / automobilioAmzius;
console.log("Per metus vidutiniškai nuvažiuota:", ridaPerMetus, "km");

console.log("========================\n");

// 6.
console.log("6. Užduotis");

let senisBesmegenis = {
    akys: "angliukai",
    nosis: "morka",
    rankos: "pagaliukai",
    temperatura: {
        max: 0,
        min: -50,
    },
    smegenys: false,
    autoriai: ["Tomas", "Darius", "Rita", "Evaldas"],
};

console.log("Senis Besmegenis", senisBesmegenis);

let laukoTemperatura = 5;
console.log("Jei lauke", laukoTemperatura, "laipsniai,");
if (laukoTemperatura > senisBesmegenis.temperatura.max) {
    console.log("senis tirpsta... :/");
} else {
    console.log("seniui viskas gerai :)");
}

console.log("========================\n");
console.log("========================\n");
console.log("========================\n");

// JavaScript 11 paskaita, Objektai 2 dalis, užduotys
console.log("JavaScript 11 paskaita, Objektai 2 dalis, užduotys");
console.log("========================\n");

// 1.
console.log("Pirma užduotis");

const knygynas = {
    pavadinimas: "Juodos Avys",
    adresas: "Vytauto g. 13",
    plotas_m2: 200,
    knyguSkaicius: 5000,
    darboValandos: {
        nuo: 8,
        iki: 21,
    },
    atidarytas: true,
};
console.log("Knygynas", knygynas);
console.log("");

for (const reiksme in knygynas) {
    if (typeof knygynas[reiksme] !== "string") {
        console.log(reiksme, knygynas[reiksme]);
    }
}

console.log("========================\n");

// 2.
console.log("2. Užduotis");

let studentas1 = {
    vardas: "Eustachijus",
    pavarde: "Vamzdys",
    studijuPrograma: "Kadastrinių matavimų specialistas",
    pazymiai: [10, 10, 8, 9],
};

let studentas2 = {
    vardas: "Gėrimantas",
    pavarde: "Dugnelis",
    studijuPrograma: "Feminizmo istorija",
    pazymiai: [6, 7, 7, 5],
};

console.log("Pirmas studentas", studentas1, "\nAntras studentas", studentas2);

let suma1 = 0;
let suma2 = 0;

for (let pazymys of studentas1.pazymiai) {
    suma1 += pazymys;
}
let vidurkis1 = suma1 / studentas1.pazymiai.length;
console.log("Pirmo studento vidurkis:", vidurkis1);

for (let pazymys of studentas2.pazymiai) {
    suma2 += pazymys;
}

let vidurkis2 = suma2 / studentas2.pazymiai.length;
console.log("Antro studento vidurkis:", vidurkis2);

if (vidurkis1 > vidurkis2) {
    console.log(`${studentas1.vardas} ${studentas1.pavarde} mokosi geriau.`);
} else if (vidurkis2 > vidurkis1) {
    console.log(`${studentas2.vardas} ${studentas2.pavarde} mokosi geriau.`);
} else {
    console.log("Studentai mokosi vienodai.");
}
