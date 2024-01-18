// js13_funkcijos_uzduotys

// 1.1.
console.log("1. Dalis, 1. Užduotis\n");

function vardas() {
    console.log("Paulius");
    console.log("nori sėdimo darbo.");
    console.log();
}
vardas();
vardas();
vardas();

console.log("======================================\n");

// 1.2.
console.log("1. Dalis, 2 Užduotis\n");

function lorem() {
    console.log(
        "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    );
    console.log();
}

for (let i = 1; i <= 5; i++) {
    lorem();
}

console.log("======================================\n");

// 1.3.
console.log("1. Dalis, 3. Užduotis\n");

function pirma() {
    console.log("Pirmos funkcijos tekstas.");
    console.log();
}

function antra() {
    console.log("Antros funkcijos tekstas.");
    console.log();
}

function trecia() {
    console.log("Trečios funkcijos tekstas.");
    console.log();
}

pirma();
antra();
trecia();

console.log("======================================\n");

// 1.4.
console.log("1. Dalis, 4. Užduotis\n");

function roses() {
    console.log("Roses are red,");
}

function violets() {
    console.log("Violets are blue.");
}

function poem() {
    roses();
    violets();
}

poem();

console.log("======================================\n");

// 1.5.
console.log("1. Dalis, 5. Užduotis\n");

function randomAddition() {
    let a = Math.ceil(Math.random() * 10);
    let b = Math.ceil(Math.random() * 10);
    let addition = a + b;
    console.log(`${a} + ${b} = ${addition}`);
}

randomAddition();
randomAddition();

console.log("======================================\n");

// 1.6.
console.log("1. Dalis, 6. Užduotis\n");

function policininkas() {
    let vardas = "Petras";
    let pavarde = "Petraitis";
    let amzius = 40;
    let alga = 2000;
    console.log(
        `Policininkas ${vardas} ${pavarde} yra ${amzius}-metis, ant popieriaus gaunantis ${alga} eurų.`,
    );
}

policininkas();

console.log("======================================\n");

// 1.7.
console.log("1. Dalis, 7. Užduotis\n");

// per array
function skaiciai() {
    let numbers = [];
    for (let i = 1; i <= 10; i++) {
        let a = Math.ceil(Math.random() * 9);
        numbers.push(a);
    }
    let result = numbers.join(" ");
    console.log(result);
}

console.log("Naudojant vieną funkciją su array.join()\n");
for (let i = 1; i <= 5; i++) {
    skaiciai();
    console.log();
}

// per string
function randomNum() {
    return Math.ceil(Math.random() * 9);
}

function randomNumX10() {
    let stringOf10 = "";
    for (let i = 1; i <= 10; i++) {
        let a = randomNum();
        stringOf10 += a + " ";
    }
    return stringOf10;
}

console.log("Naudojant dvi funkcijas ir string\n");
for (let i = 1; i <= 5; i++) {
    console.log(randomNumX10());
    console.log();
}

console.log("======================================\n");

// 1.8.
console.log("1. Dalis, 8. Užduotis\n");

// panaudosiu funkciją iš "randomNum" iš 7 užduoties

for (let i = 1; i <= 10; i++) {
    console.log(randomNum());
}

console.log("======================================");
console.log("======================================");
console.log("======================================\n");

// 2.1.
console.log("2. Dalis, 1. Užduotis\n");

function labas(vardas) {
    console.log("Labas,", vardas);
}

function davai(vardas) {
    console.log("Viso gero,", vardas);
}

const tikrasisVardas = "Eustachijus";

labas(tikrasisVardas);
davai(tikrasisVardas);

console.log("======================================\n");

// 2.2.
console.log("2. Dalis, 2. Užduotis\n");

function duSkaiciai(pirmas, antras) {
    console.log(`Skaičiai yra ${pirmas} ir ${antras}`);
    if (pirmas > antras) {
        console.log(`Skaičius ${pirmas} yra didesnis.`);
    } else if (antras > pirmas) {
        console.log(`Skaičius ${antras} yra didesnis.`);
    } else {
        console.log("Skaičiai yra lygūs.");
    }
}

let atsitiktiktiktiktinis = Math.ceil(Math.random() * 10);
let darAtsitiktiktiktiktinesnis = Math.ceil(Math.random() * 10);

duSkaiciai(atsitiktiktiktiktinis, darAtsitiktiktiktiktinesnis);

console.log("======================================\n");

// 2.3.
console.log("2. Dalis, 3. Užduotis\n");

function auto(marke, modelis, metai, turis) {
    console.log("¯`v´¯) Myliu savo", marke, modelis);
    console.log("`*.¸.*´ ?");
    console.log("¸.•´¸.•*¨) ¸.•*¨)?", metai, "metų ir");
    console.log("¸.•´¸.•*¨) ¸.•*¨)?", turis, "litriukų...");
    console.log(" ¸.·´¸.·´¨) ¸.·*¨)");
}

auto("Audi", "100", 2000, 1.6);
console.log();

auto("WV", "Golf", "1999", "1.6");

console.log("======================================\n");

// 2.4.
console.log("2. Dalis, 4. Užduotis\n");

function sudetis(a, b) {
    console.log(`${a} + ${b} = ${a + b}`);
}

function atimtis(a, b) {
    console.log(`${a} - ${b} = ${a - b}`);
}

function daugyba(a, b) {
    console.log(`${a} : ${b} = ${a / b}`);
}

function dalyba(a, b) {
    console.log(`${a} x ${b} = ${a * b}`);
}

function randomMath() {
    let a = Math.ceil(Math.random() * 10);
    let b = Math.ceil(Math.random() * 10);
    sudetis(a, b);
    atimtis(a, b);
    daugyba(a, b);
    dalyba(a, b);
}

randomMath();
console.log();
randomMath();

console.log("======================================");
console.log("======================================");
console.log("======================================\n");

// 3.1.
console.log("3. Dalis, 1. Užduotis\n");

function masyvas(zodziai) {
    for (let zodis of zodziai) {
        console.log(`Žodis "${zodis}", raidžių skaičius - ${zodis.length}`);
    }

    return
}

let dienos = ["pirmadienis", "antradienis", "treciadienis", "ketvirtadienis"];

masyvas(dienos);
console.log();

console.log("======================================\n");

// 3.2.
console.log("3. Dalis, 2. Užduotis\n");

function skaiciausKvadratas(array) {
    for (let number of array) {
        console.log(`${number} - ${number * number} - ${(number * number) / 2}`);
    }
}

let skaiciuEilute = [];
for (let i = 1; i <= 5; i++) {
    let skaicius = Math.ceil(Math.random() * 10);
    skaiciuEilute.push(skaicius);
}

let skaiciuEilute2 = [];
for (let i = 1; i <= 5; i++) {
    let skaicius = Math.ceil(Math.random() * 10);
    skaiciuEilute2.push(skaicius);
}

skaiciausKvadratas(skaiciuEilute);
console.log();
skaiciausKvadratas(skaiciuEilute2);

console.log("======================================\n");

// 3.3.
console.log("3. Dalis, 3. Užduotis\n");

function studentas(vardas, pavarde, balai) {
    let baluSuma = 0;
    for (let balas of balai) {
        baluSuma += balas;
    }
    let vidurkis = (baluSuma / balai.length).toFixed(1);

    console.log(`Studentas ${vardas} ${pavarde}`);
    console.log(`Pažymiai: ${balai.join(", ")}`);
    console.log(`Pažymių vidurkis: ${vidurkis}`);
}

studentas("Petras", "Petraitis", skaiciuEilute);
console.log();
studentas("Jonas", "Jonaitis", skaiciuEilute2);

console.log("======================================\n");

// 3.4.
console.log("3. Dalis, 4. Užduotis\n");

function didziausias(array) {
    let max = array[0];
    for (let item of array) {
        if (item > max) {
            max = item;
        }
    }
    console.log(`Didžiausias skaičius: ${max}`);
}

function papildymas(emptyArray) {
    for (let i = 1; i <= 5; i++) {
        let skaicius = Math.ceil(Math.random() * 10);
        emptyArray.push(skaicius);
    }
}

let pirmasMasyvas = [];
let antrasMasyvas = [];
let treciasMasyvas = [];

papildymas(pirmasMasyvas);
papildymas(antrasMasyvas);
papildymas(treciasMasyvas);

console.log("Pirmas masyvas:", pirmasMasyvas);
didziausias(pirmasMasyvas);
console.log();
console.log("Antras masyvas:", antrasMasyvas);
didziausias(antrasMasyvas);
console.log();
console.log("Trečias masyvas:", treciasMasyvas);
didziausias(treciasMasyvas);
