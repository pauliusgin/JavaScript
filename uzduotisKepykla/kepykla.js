// Žinių užtvirtinimas
// KEPYKLA

// Užduoties tikslas
//
// Suskaičiuoti kiek duonos kepalų kepykla sugebės iškepti per dieną, ar
// spės įgyvendinti visus dienos užsakymus ir suskaičiuoti kiek iš jų uždirbs
// pelno.

// Duomenys
const darboValandos = 8;
let kepalaiPerValanda = Math.random().toFixed(1) * 10 + 20;
let darbuotojai = 3;
let kepaloSavikaina = 0.5;
let kepaloKaina = 1.5;
let kepalaiPerDiena = kepalaiPerValanda * darboValandos;
let dienosUsakymai = Math.random().toFixed(2) * 300;

let parduotiKepalai =
  kepalaiPerDiena <= dienosUsakymai ? kepalaiPerDiena : dienosUsakymai;

console.log(`Dienos užsakymai: ${dienosUsakymai}vnt.`);
console.log(`Kepykla gali iškepti: ${kepalaiPerDiena}vnt.`);

// 1.
console.log(
  `1. Kepykloje dirba ${darbuotojai} darbuotojai. Kepykla per dieną gali iškepti ${kepalaiPerDiena}vnt. duonos kepalų.`,
);

let dienosSavikaina = kepaloSavikaina * parduotiKepalai;

let dienosPajamos = kepaloKaina * parduotiKepalai;

let dienosPelnas = dienosPajamos - dienosSavikaina;

// 2.
console.log(
  `2. Turėdama ${dienosUsakymai}vnt. duonos užsakymą, o per dieną iškepdama ${kepalaiPerDiena}vnt. duonos kepalų, kepykla gali parduoti ${parduotiKepalai}vnt. duonos ir gauti ${dienosPajamos}€ pajamų ir ${dienosPelnas}€ pelno.`,
);

// 3.
if (kepalaiPerDiena > dienosUsakymai) {
  console.log(
    `3. Dirbdama tokiu tempu ir turėdama tiek užsakymų, kepykla spės iškepti visą reikiamą duoną ir net gali užsakymų skaičių padidinti iki ${kepalaiPerDiena}vnt. kepalų per dieną.`,
  );
} else if (kepalaiPerDiena < dienosUsakymai) {
  console.log(
    `3. Dirbdama tokiu tempu ir turėdama tiek užsakymų, kepykla nespės iškepti ${
      dienosUsakymai - kepalaiPerDiena
    }vnt. kepalų duonos.`,
  );
} else if (kepalaiPerDiena === dienosUsakymai) {
  console.log(
    "3. Dirbdama tokiu tempu ir turėdama tiek užsakymų, kepykla spės iškepti visą užsakytą duoną.",
  );
}
