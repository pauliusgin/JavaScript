//  4.1.
console.log("4. dalis, 1. užduotis\n");

const sakiniuGamykla = (sakinys) => {
  return sakinys;
};

console.log(sakiniuGamykla("Pirmas sakinys."));
console.log(sakiniuGamykla(100));

console.log("====================================\n");

// 4.2
console.log("4. dalis, 2. užduotis\n");

const atsitiktinisSkaicius = () => {
  return Math.floor(Math.random() * 100);
};

let pirmas = atsitiktinisSkaicius();
let antras = atsitiktinisSkaicius();
console.log("Pirmas atsitiktinis skaičius:", pirmas);
console.log("Antras atsitiktinis skaičius:", antras);

console.log("====================================\n");

// 4.3
console.log("4. dalis, 3. užduotis\n");

const studentas = (vardas, vidurkis) => {
  let result = `Studento vardas yra ${vardas} ir jo pažymių vidurkis yra ${vidurkis}.`;
  return result;
};

let tomas = studentas("Tomas", 7);
console.log(tomas);

console.log(studentas("Linas", 5));

console.log("====================================\n");

// 4.4
console.log("4. dalis, 4. užduotis\n");

const maziausiasDaliklis = (num) => {
  let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];

  for (let prime of primes) {
    if (num % prime === 0 && num === prime) {
      return `${num} yra pirminis skaičius.`;
    } else if (num % prime === 0) {
      return `Skaičiaus ${num} mažiausias daliklis yra ${prime}`;
    }
  }
  return -1;
};

for (let i = 10; i <= 30; i++) {
  console.log(maziausiasDaliklis(i));
}

console.log("====================================\n");

// 4.5
console.log("4. dalis, 4. užduotis\n");

const arPirminis = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

for (let i = 2; i <= 15; i++) {
  let result = arPirminis(i);
  console.log(`${i}, ${result}`);
}

console.log("====================================\n");

// 4.6
console.log("4. dalis, 6. užduotis\n");

const sudetis2 = (a, b) => {
  return a + b;
};

const sudetis3 = (a, b, c) => {
  return a + b + c;
};

const daugyba = (a, b) => {
  return a * b;
};

const matematika = () => {
  let a = Math.ceil(Math.random() * 10);
  let b = Math.ceil(Math.random() * 10);
  let c = Math.ceil(Math.random() * 10);

  let atsSudetis2 = sudetis2(a, b);
  let atsSudetis3 = sudetis3(a, b, c);
  let atsDaugyba = daugyba(a, b);

  console.log(`Atsitiktinių skaičių ${a} ir ${b} suma yra ${atsSudetis2}`);
  console.log(
    `Atsitiktinių skaičių ${a}, ${b} ir ${c} suma yra ${atsSudetis3}`
  );
  console.log(`Atsitiktinių skaičių ${a} ir ${b} sandauga yra ${atsDaugyba}`);
};

matematika();

console.log("====================================");
console.log("====================================");
console.log("====================================");

// 5.1
console.log("5. dalis, 1. užduotis\n");

const sudedamMasyva = (array) => {
  let sum = 0;
  for (const num of array) {
    sum += num;
  }
  return sum;
};

const masyvas = [];
const darVienasMasyvas = [];

for (let i = 1; i <= Math.ceil(Math.random() * 10); i++) {
  masyvas.push(Math.ceil(Math.random() * 10));
  darVienasMasyvas.push(Math.ceil(Math.random() * 10));
}

let masyvasSuma = sudedamMasyva(masyvas);
let darVienasMasyvasSuma = sudedamMasyva(darVienasMasyvas);

console.log("Pirmas masyvas:", masyvas);
console.log("Pirmo masyvo skaitmenų suma:", masyvasSuma);
console.log();
console.log("Antras masyvas:", darVienasMasyvas);
console.log("Antro masyvo skaitmenų suma:", darVienasMasyvasSuma);
console.log();

if (masyvasSuma > darVienasMasyvasSuma) {
  console.log("Pirmo masyvo skaičių suma didesnė.");
} else if (darVienasMasyvasSuma > masyvasSuma) {
  console.log("Antro masyvo skaičių suma didesnė.");
} else {
  console.log("Abiejų masyvų skaičių suma vienoda.");
}

console.log("====================================\n");

// 5.2
console.log("5. dalis, 2. užduotis\n");

const ilgiausias = (masyvas) => {
  let ilgiausiasZodis = masyvas[0];
  for (const zodis of masyvas) {
    if (zodis.length > ilgiausiasZodis.length) {
      ilgiausiasZodis = zodis;
    }
  }
  return `Ilgiausias žodis: "${ilgiausiasZodis}", raidžių kiekis: ${ilgiausiasZodis.length}`;
};
console.log(ilgiausias(["vienas", "du", "dvylika", "trys", "trylika"]));

console.log("====================================\n");

// 5.3
console.log("5. dalis, 3. užduotis\n");

const pirmiBalai = Array.from(masyvas);
const antriBalai = Array.from(darVienasMasyvas);

const balaiTeigiami = (balai) => {
  return balai.every((balas) => balas >= 5);
};

const ivertinimas = (balaiTeigiami) => {
  if (balaiTeigiami) {
    console.log("Visi studento pažymiai teigiami.");
  } else {
    console.log("Studentas turi bent vieną neigiamą pažymį.");
  }
};

const pirmasStudentas = balaiTeigiami(pirmiBalai);
const antrasStudentas = balaiTeigiami(antriBalai);

console.log("Pirmo studento pažymiai:", pirmiBalai);
ivertinimas(pirmasStudentas);
console.log();
console.log("Antro studento pažymiai:", antriBalai);
ivertinimas(antrasStudentas);

console.log("====================================");
console.log("====================================");
console.log("====================================\n");

// 6.1 funkcijos objektuose
console.log("6. dalis: funkcijos objektuose, 1. užduotis\n");

const darbuotojas = {
  name: "Tomas",
  surname: "Taitis",
  salary: 1000,
  workingTime: 1,
  salaryIncrease: function (percent) {
    let increase = this.salary + (this.salary * percent) / 100;
    return `Pakėlus atlyginimą ${percent}%, darbuotojas gautų ${increase}€.`;
  },
  partTimeSalary: function (workingTime) {
    let partTime = this.salary * workingTime;
    return `Dirbdamas ${workingTime} etato, darbuotojas gautų ${partTime}€ atlyginimą.`;
  },
};

console.log("Darbuotojas:", darbuotojas);
console.log();

console.log(darbuotojas.salaryIncrease(20));
console.log();

console.log(darbuotojas.partTimeSalary(0.75));
