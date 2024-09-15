// 1. ylesanne

const array1 = [1, 2, 3, 4, 5];

function findIndex(array, num) {
    return array.indexOf(num);
}

console.log(findIndex(array1, 5));

// 2. ylesanne

function addNumbers(num1, num2){
    return num1 + num2;
}

console.log(addNumbers(1, 2));

// 3. ylesanne: ymber krijutada arrow funktsioonina

const addNumbersArrowFn = (num1, num2) => num1 + num2;

console.log(addNumbersArrowFn(1, 33));

// 4. ylesanne: ymber kirjutada shorthand arrow funktsioonina

const addNumberArrowFnShort = (num1, num2) => num1 + num2;

console.log(addNumberArrowFnShort(5, 6));

// 5. ylesanne luua funktsioon sellisel kujul, et saaks kutsuda valja seda nii:

function addNumbersNested(num1) {
    return function (num2) {
        return num1 + num2;
    };
}

console.log(addNumbersNested(3)(99));

// 6. ylesanne: samast funkts arrow funkts.

const addNumbersNestedAF = (num1) => (num2) => num1 + num2;

console.log(addNumbersNestedAF(3)(99));

// 7. Ylesanne: AF printida "Hello (nimi) ja kasutada string literals

const greet = (name = "World") => `Hello ${name}`;

console.log(greet());
console.log(greet("crystal"));

// teema: map ja filter

// 8. ylesanne: liita igale elemendile juurde +5, et uuel muutujale omandataks

const newArray = [1, 2, 3, 4, 5];
const addedArray = newArray.map((element) => element + 5);

console.log(addedArray);

// 9. ylesanne: kaime labi ka erinevad 3 parameetrit, mida saab map ja filtriga valja kirjutada

const threeParameters = newArray.map((element, index, array) => {
    console.log(element, index, array);
    return element + 5;
});

console.log({ threeParameters });

// 10. Muudame objektiks, et console.log-ides oleks paremini märgata

// Filter

// 11. Ülesanne: filtreerida välja uuesti massiivist kõik elemendid, mis on suuremad kui 4

const array2 = [1, 2, 3, 4, 5, 6];

const filteredArray = array2.filter((element) => {
  console.log(element > 4);
  return element > 4;
});

console.log({ filteredArray });
console.log({ filteredArray: filteredArray });
console.log(filteredArray);

// 12. Ülesanne: Luua nimede massivi põhjal objektide massiv, mis koosneb sellisel kujul objektidest:

const names = ["alya", "vanya", "manya", "katrin"];

const objectifiedNames = names.map((name) => {
  return {
    name: name,
    age: name.length + 18,
    email: `${name}@starship.co`,
    address: `${name} Street 55`,
    username: name.split("").reverse().join(""),
  };
});

console.log({ objectifiedNames });

// 13. Tahame juurde lisada pikkuse ja jätta eelnevad kõik andmed samaks, spread syntax

let cristina = {
  name: "Cristina",
  school: "TLÜ",
};

cristina = { ...cristina, height: 174 };

console.log({ cristina });

// 15. == / ===

console.log(1 == "1");
console.log(1 === "1");

// async/await Promise

const myPromise = () => {
  return new Promise((resolve) => setTimeout(() => resolve("done"), 1000));
};

const runPromise = async () => {
  console.log(await myPromise());
};

runPromise();

// setTimeout(() => console.log("timeout"), 2000);