console.log("Pirma užduotis:");
let a = 2;
let b = 3;
let c = 4;
console.log(`Pasirinkti skaičiai: ${a}, ${b} ir ${c}`);

let klausimas1 =
    a === b
        ? console.log(`1. ${a} ir ${b} yra lygūs`)
        : console.log(`1. ${a} ir ${b} nėra lygūs`);

let klausimas2 =
    b === c
        ? console.log(`2. ${b} ir ${c} yra lygūs`)
        : console.log(`2. ${b} ir ${c} nėra lygūs`);

let klausimas3 =
    a > b
        ? console.log(`3. ${a} yra daugiau už ${b}`)
        : console.log(`3. ${a} nėra daugiau už ${b}`);

let klausimas4 =
    a > c * 2
        ? console.log(`4. ${a} yra daugiau už ${c} x 2`)
        : console.log(`4. ${a} nėra daugiau ${c} x 2`);

let klausimas5 =
    a % 2 === 0
        ? console.log(`5. ${a} yra lyginis`)
        : console.log(`5. ${a} yra nelyginis`);

let klausimas6 =
    b % 2 === 0
        ? console.log(`6. ${b} yra lyginis`)
        : console.log(`6. ${b} yra nelyginis`);

let klausimas7 =
    c > 0
        ? console.log(`7. ${c} yra daugiau už nulį`)
        : console.log(`7. ${c} yra mažiau už nulį`);

let klausimas8 =
    a > 0
        ? console.log(`8. ${a} yra daugiau už nulį`)
        : console.log(`8. ${a} yra mažiau už nulį`);

let klausimas9 =
    b % 4 === 0
        ? console.log(`9. ${b} dalinasi iš keturių`)
        : console.log(`9. ${b} nesidalina iš keturių`);

let klausimas10 =
    c % 8 === 0
        ? console.log(`10. ${c} dalinasi iš aštuonių`)
        : console.log(`10. ${c} nesidalina iš aštuonių`);

// ========================================================
console.log(" ");
console.log("Antra užduotis:");
let age = 20;
let ableToVote =
    age > 18
        ? console.log(`${age} metų amžiaus žmogus gali balsuoti`)
        : console.log(`${age} metų amžiaus žmogus balsuoti negali`);

// ========================================================
console.log(" ");
console.log("Trečia užduotis:");
let balas1 = 10;
let balas2 = 8;
let balas3 = 9;
let balas4 = 9;
console.log(`Pažymiai: ${balas1}, ${balas2}, ${balas3}, ${balas4}`);
let vidurkis = (balas1 + balas2 + balas3 + balas4) / 4;
vidurkis > 5
    ? console.log(`Vidurkis (${vidurkis}) yra teigiamas (didesnis už penketą)`)
    : console.log(`Vidurkis (${vidurkis}) yra neigiamas (mažesnis už penketą)`);

// ========================================================
console.log(" ");
console.log("Ketvirta užduotis:");
let x = Math.random().toFixed(1) * 10;
let y = Math.random().toFixed(1) * 10;
console.log(`Pasirinktas skaičius: ${x}`);
let dalyba =
    x % 5 === 0
        ? console.log(`1. Kadangi skaičius ${x} dalinasi iš 5, štai jo daugybos lentelė:
    ${x} x 1 = ${x * 1}
    ${x} x 2 = ${x * 2}
    ${x} x 3 = ${x * 3}
    ${x} x 4 = ${x * 4}
    ${x} x 5 = ${x * 5}
     `)
        : console.log(`1. Skaičius ${x} nesidalina iš 5\n`);

let lyginis =
    x % 2 === 0
        ? console.log(
              `2. Kadangi skaičius ${x} yra lyginis, štai jo kvadratas, padalintas perpus:
    ${(x * x) / 2}
    `
          )
        : console.log(`2. Skaičius ${x} yra nelyginis\n`);

let antras =
    x % 7 != 0
        ? console.log(`3. Kadangi skaičius ${x} nesidalina iš 7, pasirenkame antrą skaičių ${y}.
    Šių skaičių suma: ${x + y}
    Šių skaičių skirtumas: ${x - y}
    Šių skaičių sandauga: ${x * y}
    Šių skaičių dalmuo: ${(x / y).toFixed(2)}`)
        : console.log(`3. Skaičius ${x} dalinasi iš 7`);
