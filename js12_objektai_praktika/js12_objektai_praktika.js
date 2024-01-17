// js12_objektai_praktika
console.log("js12 objektai praktika, 4 dalis, užduotys\n");

// 4.1.
console.log("4. Dalis, 1. Užduotis\n");

const knygos = [
    {
        pavadinimas: "Atominiai įpročiai",
        autorius: "James Clear",
        kaina: 9.99,
    },
    {
        pavadinimas: "Kūnas mena viską",
        autorius: "Bessel Van Der Kolk",
        kaina: 12.19,
    },
    {
        pavadinimas: "Sielų kelionės",
        autorius: "Michael Newton",
        kaina: 12.99,
    },
];

console.log("Knygos:", knygos);
console.log(" ");

console.log("Pirma knyga:", knygos[0]);
console.log(" ");

console.log("Antros knygos pavadinimas:", knygos[1].pavadinimas);

console.log("========================\n");

// 4.2.
console.log("4. Dalis, 2. Užduotis\n");

const prekes = [
    {
        pavadinimas: "Šviesos efektų astronautas",
        tipas: "projektorius",
        kaina: 19.49,
        yraSandelyje: true,
    },
    {
        pavadinimas: "FujiFilm ColorFilm",
        tipas: "Foto lapeliai",
        kaina: 16.99,
        yraSandelyje: true,
    },
    {
        pavadinimas: "Xiaomi Mi Home Monitor 2",
        tipas: "Higrometras",
        kaina: 7.25,
        yraSandelyje: false,
    },
    {
        pavadinimas: "JBL Tune 510BT",
        tipas: "Belaidės ausinės",
        kaina: 31.99,
        yraSandelyje: true,
    },
];

for (const preke of prekes) {
    console.log(
        `${preke.pavadinimas} - ${preke.kaina}€, ${preke.yraSandelyje ? "sandėlyje yra" : "sandėlyje nėra"
        // Works the same as preke.yraSandelyje === true, I guess because truthy value?
        }`,
    );
}

console.log("========================\n");

// 4.3.
console.log("4. Dalis, 3. Užduotis\n");

const data = new Date(Date.now()).getFullYear();

const automobiliai = [
    {
        pavadinimas: "Audi A8",
        kaina: 9999,
        gamybosMetai: 2011,
        kuras: "benzinas",
        automatas: true,
    },
    {
        pavadinimas: "Land Rover Freelander",
        kaina: 7999,
        gamybosMetai: 2011,
        kuras: "dyzelinas",
        automatas: true,
    },
    {
        pavadinimas: "Dodge Caliber",
        kaina: 6300,
        gamybosMetai: 2009,
        kuras: "benzinas",
        automatas: false,
    },
    {
        pavadinimas: "Mazda 6",
        kaina: 850,
        gamybosMetai: 2005,
        kuras: "dyz",
        automatas: false,
    },
];

for (const auto in automobiliai) {
    let eilesNr = Number(auto) + 1;
    let amzius = data - automobiliai[auto].gamybosMetai;
    console.log(
        `${eilesNr}. ${automobiliai[auto].pavadinimas}, ${automobiliai[auto].gamybosMetai} (amžius - ${amzius}m.)`,
    );
}

console.log("========================\n");
console.log("========================\n");
console.log("========================\n");

// 5.1.
console.log("5. Dalis, 1. Užduotis\n");

const imones = [
    {
        pavadinimas: "GPS Partneris",
        adresas: "Laisves pr. 71",
        veiklosSritis: "elektronika",
        registruota: 2009,
        darbuotojai: 3,
    },
    {
        pavadinimas: "Asseco Lietuva",
        adresas: "V. Gerulaičio g.10",
        veiklosSritis: "IT paslaugos",
        registruota: 1991,
        darbuotojai: 212,
    },
    {
        pavadinimas: "Pajūrio Auditas",
        adresas: "Svajonės g. 40",
        veiklosSritis: "Buhalterine apskaita",
        registruota: 2002,
        darbuotojai: 12,
    },
];

let imoniusKiekis = imones.length;
let visiDarbuotojai = 0;
let bendrasImoniuAmzius = 0;

for (const imone of imones) {
    let imonesAmzius = data - imone.registruota;
    console.log(
        `Įmonėje "${imone.pavadinimas}", įkurtoje ${imone.registruota}m., dirba ${imone.darbuotojai
        } ${imone.darbuotojai < 10 ? "darbuotojai." : "darbuotojų."}`,
    );
    visiDarbuotojai += imone.darbuotojai;
    bendrasImoniuAmzius += imonesAmzius;
}
console.log("");

console.log(
    "Visose šiose įmonėse kartu paėmus dirba",
    visiDarbuotojai,
    "žmonės.",
);
console.log(
    "Vidutinis šių įmonių amžius yra",
    Math.floor(bendrasImoniuAmzius / imoniusKiekis),
    "metai.",
);

console.log("========================\n");

// 5.2.
console.log("5. Dalis, 2. Užduotis\n");

const ligonines = [
    {
        pavadinimas: "Antakalnio poliklinika",
        adresas: "Antakalnio g. 59",
        darbuotojai: 870,
    },
    {
        pavadinimas: "Centro poliklinika",
        adresas: "Pylimo g. 3",
        darbuotojai: 997,
    },
    {
        pavadinimas: "Karoliniškių poliklinika",
        adresas: "Asanavičiūtės g. 27A",
        darbuotojai: 681,
    },
];

let darbuotojuSuma = 0;

for (const ligonine of ligonines) {
    console.log(ligonine.pavadinimas);
    console.log(ligonine.adresas, "\n");
    darbuotojuSuma += ligonine.darbuotojai;
}

let darbuotojuVidurkis = Math.floor(darbuotojuSuma / ligonines.length);
console.log("Vidutinis šių ligoninių darbuotojų skaičius:", darbuotojuVidurkis);

console.log("========================\n");

// 6.1.
console.log("6. Dalis, 1. Užduotis\n");

const studentai = [
    {
        vardas: "Petras",
        pavarde: "Petraitis",
        amzius: Math.floor(Math.random() * 4 + 18),
        pazymiai: [
            Math.ceil(Math.random() * 6 + 4),
            Math.ceil(Math.random() * 6 + 4),
            Math.ceil(Math.random() * 6 + 4),
            Math.ceil(Math.random() * 6 + 4),
            Math.ceil(Math.random() * 6 + 4),
        ],
        studijuPrograma: "Informatika",
        kursas: Math.ceil(Math.random() * 4),
    },
    {
        vardas: "Jonas",
        pavarde: "Jonaitis",
        amzius: Math.floor(Math.random() * 4 + 18),
        pazymiai: [
            Math.ceil(Math.random() * 6 + 4),
            Math.ceil(Math.random() * 6 + 4),
            Math.ceil(Math.random() * 6 + 4),
            Math.ceil(Math.random() * 6 + 4),
            Math.ceil(Math.random() * 6 + 4),
        ],
        studijuPrograma: "Literatūra",
        kursas: Math.ceil(Math.random() * 4),
    },
    {
        vardas: "Algis",
        pavarde: "Algutis",
        amzius: Math.floor(Math.random() * 4 + 18),
        pazymiai: [
            Math.ceil(Math.random() * 6 + 4),
            Math.ceil(Math.random() * 6 + 4),
            Math.ceil(Math.random() * 6 + 4),
            Math.ceil(Math.random() * 6 + 4),
            Math.ceil(Math.random() * 6 + 4),
        ],
        studijuPrograma: "Fizika",
        kursas: Math.ceil(Math.random() * 4),
    },
];

let bendraPazymiuSuma = 0;
let bendrasPazymiuKiekis = 0;

for (const studentas of studentai) {
    console.log(
        `${studentas.vardas} ${studentas.pavarde}, ${studentas.amzius}m., ${studentas.studijuPrograma} - ${studentas.kursas} kursas.`,
    );
    console.log(`Pažymiai: ${studentas.pazymiai}`);

    // paskaičiuojam studento pažymių sumą ir vidurkį
    let pazymiuSuma = 0;

    for (let pazymys of studentas.pazymiai) {
        pazymiuSuma += pazymys;
    }

    let pazymiuVidurkis = (pazymiuSuma / studentas.pazymiai.length).toFixed(1);
    console.log(`Pažymių vidurkis: ${pazymiuVidurkis}`);

    console.log();

    // susirenkam info bendram vidurkiui skaičiuoti
    bendraPazymiuSuma += pazymiuSuma;
    bendrasPazymiuKiekis += studentas.pazymiai.length;
}
console.log("-------------------------");

let bendrasVidurkis = (bendraPazymiuSuma / bendrasPazymiuKiekis).toFixed(1);
console.log(`Bendras visų studentų pažymių vidurkis: ${bendrasVidurkis}`);

console.log("========================\n");

// 6.2.
console.log("6. Dalis, 2. Užduotis\n");

const shop = {
    title: "Geriausia Parduotuvė",
    adress: "Mėnuliečių g. 101",
    staff: 25,
    items: [
        {
            name: "Blenderis",
            code: "1234",
            price: Math.ceil(Math.random() * 10 + 10),
            cost: Math.ceil(Math.random() * 5 + 5),
            amount: Math.ceil(Math.random() * 100 + 100),
        },
        {
            name: "Kėdė",
            code: "2335",
            price: Math.ceil(Math.random() * 20 + 20),
            cost: Math.ceil(Math.random() * 10 + 10),
            amount: Math.ceil(Math.random() * 100 + 100),
        },
        {
            name: "Kava",
            code: "4411",
            price: Math.ceil(Math.random() * 5 + 5),
            cost: Math.ceil(Math.random() * 5),
            amount: Math.ceil(Math.random() * 100 + 100),
        },
    ],
};

console.log(`"${shop.title}" \n${shop.adress}  \n${shop.staff} darbuotojai`);
console.log();

console.log("Prekės:");

let prekiuSuma = 0;
for (const item of shop.items) {
    console.log(`${item.name}, ${item.price}€, likutis: ${item.amount} vnt.`);
    prekiuSuma += item.amount;
}
console.log();
console.log("Bendras prekių kiekis:", prekiuSuma, "vnt.");

// kurios prekės yra daugiausia
if (
    shop.items[0].amount > shop.items[1].amount &&
    shop.items[0].amount > shop.items[2].amount
) {
    console.log(`Prekės "${shop.items[0].name}" yra daugiausia.`);
} else if (
    shop.items[1].amount > shop.items[0].amount &&
    shop.items[1].amount > shop.items[2].amount
) {
    console.log(`Prekės "${shop.items[1].name}" yra daugiausia.`);
} else if (
    shop.items[2].amount > shop.items[0].amount &&
    shop.items[2].amount > shop.items[1].amount
) {
    console.log(`Prekės "${shop.items[2].name}" yra daugiausia.`);
} else {
    console.log("Prekių yra vienodi kiekiai.");
}
