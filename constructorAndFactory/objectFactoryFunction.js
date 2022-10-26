// Factory Function 
function createPerson(name, lastName) {
    return {
        name,
        lastName,
        fullName() {
            return `${this.name} ${this.lastName}`;
        }
    };
}
const p1 = createPerson('Edivan', 'Sousa');
console.log(p1.fullName());