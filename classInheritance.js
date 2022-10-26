class ElectronicDivice {
    constructor(name) {
        this.name = name;
        this.turnOn = false;
    }

    turnon() {
        if (this.turnon) {
            console.log(this.name + ' Já ligado');
            return;
        }

        this.turnon = true;
    }

    turnoff() {
        if (!this.turnon) {
            console.log(this.name + ' Já desligado');
            return;
        }

        this.turnon = false;
    }
}

class SmartPhone extends ElectronicDivice {
    constructor(name, colour, model){
    super(name); 
        this.colour = colour;
        this.model = model;
    }
}
const s1 = new SmartPhone('Samsung', 'Preto', 'Galaxy S10');
console.log(s1.colour);
s1.turnoff();
