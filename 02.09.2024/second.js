// 1. ylesanne

const array = [1, 2, 3, 4, 5];

function findIndex(array, num) {
    return array.indexOf(num);
}

console.log(findIndex(array, 5));

//2. ylesanne

function addNumbers(num1, num2){
    return num1 + num2;
}

console.log(addNumbers(1,2));

//3. ylesanne: ymber krijutada arrow funktsioonina

const addNumbersArrowFn = (num1, num2) => num1 + num2

console.log(addNumbers(1,33));

//4. ylesanne: ymber kirjutada shorthand arrow funktsioonina

const addNumberArrowFnShort = (num1, num2) => num1 + num2;

console.log(addNumberArrowFnShort(5, 6))

//5. ylesanne luua funktsioon sellisel kujul, et saaks kutsuda valja seda nii:

function addNumbersNested(num1) {
    return function (num2) {
        return num1 + num2;
    };
}

console.log(addNumbersNested(3)(99));

//6. ylesanne: samast funkts arrow funkts.

const addNumbersNestedAF = (num1) => (num2) => num1 + num2;

console.log(addNumbersNested(3)(99));

//7. Ylesanne: AF printida "Hello (nimi) ja kasutada string literals

const greet = (name = "World") => `Hello ${name}`;

console.log(greet());
console.log(greet("crystal"));

// teema: map ja filter

//8. ylesanne: liita igale elemendile juurde +5, et uuel muutujale omandataks

const newArray = [1, 2, 3, 4, 5];
const addedArray = newArray.map((element) => element + 5);

console.log(addedArray);

//9. ylesanne: kaime labi ka erinevad 3 parameetrit, mida saab map ja filtriga valja kirjutada

const threeParameters = newArray.map((element, index, array) => {
    console.log(element, index, array)

    const added = 1 + 2;

    return element + 5;
});

console.log({ threeParameters });