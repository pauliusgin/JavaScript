// "while" exercises

// 1.
console.log("1. Numbers from 1 to 20");
let a = 1;
while (a <= 20) {
    console.log(a);
    a++;
}
console.log("===========\n");

// 2.
console.log("2. Numbers from 1 to 50");
let b = 1;
while (b <= 50) {
    if (b % 2 === 1) {
        console.log(b, "even");
    } else {
        console.log(b, "odd");
    }
    b++;
}

console.log("===========\n");

// 3.
console.log("3. Numbers from 25 to 50");

let c = 25;
while (c <= 50) {
    if (c % 3 === 0) {
        console.log(`Number ${c} can be divided by 3`);
    } else {
        console.log(c);
    }
    c++;
}
console.log("===========\n");

// 4.
console.log("4. Division by 3 and 5");

let d = 1;
while (d < 100) {
    if (d % 3 === 0 && d % 5 === 0) {
        console.log(d, "Can be divided by 3 and 5");
        break;
    } else {
        console.log(d);
        d++;
    }
}
console.log("===========\n");

// 5.
console.log("5. The sum of even numbers up to 100");
let e = 1;
let sum = 0;
while (e <= 100) {
    if (e % 2 === 0) {
        sum = sum + e;
    }
    e++;
}
console.log(sum);

console.log("===========\n");

// 6.
console.log("6. Number and number squared");

let number = 1;

while (number < 5) {
    console.log(number, "and", number * number);
    number++;
}

console.log("===========\n");

// 7.
console.log("7. Random numbers");

let f = Math.floor(Math.random() * 10);
let g = Math.floor(Math.random() * 10) + 20;
while (f < g) {
    console.log("Number:", f);
    f = f + Math.floor(Math.random() * 10);
}

console.log("===========\n");

//  8.
console.log("8. Sum of random numbers");

let h = Math.floor(Math.random() * 10);
let i = Math.floor(Math.random() * 10) + 20;
let sumRandom = 0;

while (h < i) {
    console.log("Number:", h);
    sumRandom = sumRandom + h;
    h = h + Math.floor(Math.random() * 10);
}
console.log("Sum:", sumRandom);

console.log("===========\n");

// 9.
console.log("9. Selling goods");

let shoes = 10;
let belts = 10;
let hats = 10;
console.log(`Shop has ${shoes} shoes, ${belts} belts and ${hats} hats.\n`);

while (shoes > 0 || belts > 0 || hats > 0) {
    let shoesBought = Math.ceil(Math.random() * shoes);
    let beltsBought = Math.ceil(Math.random() * belts);
    let hatsBought = Math.ceil(Math.random() * hats);
    console.log(
        `Shop sold ${shoesBought} shoes, ${beltsBought} belts and ${hatsBought} hats.`,
    );

    shoes = shoes >= shoesBought ? shoes - shoesBought : 0;
    belts = belts >= beltsBought ? belts - beltsBought : 0;
    hats = hats >= hatsBought ? hats - hatsBought : 0;
    console.log(
        `Shop has ${shoes} shoes, ${belts} belts and ${hats} hats left.\n`,
    );
}

console.log("===========\n");

// 10.
console.log("10. Finding a prime number");

let prime = 2;

for (let i = 2; i < prime * prime; i++) {
    console.log(i, "is a prime number");
}
console.log(prime * prime, "is not a prime number anymore");
