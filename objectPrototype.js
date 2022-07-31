// new Object -> Object.Prototype
const objectA = {
    keyA: "A"
};

const objectB = {
    keyB: "B"
};

const objectC = new Object();
objectC.kayC = "C";

Object.setPrototypeOf(objectB, objectA)
Object.setPrototypeOf(objectC, objectB)
console.log(objectC.keyA);