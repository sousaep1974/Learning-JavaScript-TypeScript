const _velocity = Symbol('velocity');
class Carro {
    constructor(name) {
        this.name = name;
        this[_velocity] = 0;
    }

    set velociy(valor){
        console.log('SETTER');
        if (typeof valor !== 'number') return;
        if (valor >= 100 || valor <= 0) return;
        this [_velocity] = valor;
    }
    
    get velociy(){
        console.log('GETTER');
        return this[_velocity];
    }
    speedUp() {
        if (this[_velocity]>= 100) return;
        this[_velocity]++;
    }
    brakeUp() {
        if (this[_velocity]<= 0) return;
        this[_velocity]--;
    }
}

const c1 = new Carro('Fusca')
c1.velociy = 99;

/* for (let i = 0; i <= 200; i++) {
    c1.speedUp();
}

c1.velociy = 55; */
console.log(c1.velociy);