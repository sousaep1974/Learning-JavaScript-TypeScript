export const name = "Edivan";
export const sirname = "Sousa";
const age = 48;

export function sum (x, y) {
    return x + y;
}

export class Person {
    constructor (name, sirname, age){
        this.name = name;
        this.sirname = sirname
        this.age = age;
    }
}

export {age}