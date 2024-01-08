console.log("Pirma užduotis:");

let ticket = 3;

switch (ticket) {
    case 1:
        console.log("Vanduo!");
        break;
    case 2:
        console.log("Limonadas!");
        break;
    case 3:
        console.log("Arbata!");
        break;
    case 4:
        console.log("Kava!");
        break;
    default:
        console.log("Nėra tokio bilieto...");
        break;
}
console.log(" ");
console.log("Antra užduotis:");

let a = Math.random().toFixed(1) * 10;
let b = Math.random().toFixed(1) * 10;
let c = Math.random().toFixed(1) * 10;
let suma = a + b + c;
let sandauga = b * c;
let kvadratas = a * a;
switch (a) {
    case 1:
        console.log(`Skaičių suma yra ${suma}`);
        break;
    case 2:
        console.log(`Skaičių sandauga yra ${sandauga}`);
        break;
    case 3:
        console.log(`Skaičiaus kvadratas yra ${kvadratas}`);
        break;
    default:
        console.log("Klaida.");
        break;
}

console.log(" ");
console.log("Trečia užduotis:");

let klaida = Math.random().toFixed(1) * 10;

switch (klaida) {
    case 1:
        console.log(`Pirma klaida: ${klaida}`);
        break;
    case 2:
        console.log(`Antra klaida: ${klaida}`);
        break;
    case 3:
        console.log(`Trečia klaida: ${klaida}`);
        break;
    case 4:
        console.log(`Ketvirta klaida: ${klaida}`);
        break;

    default:
        console.log(`Kažkuri klaida tarp penktos ir dešimtos: ${klaida}`);
        break;
}
