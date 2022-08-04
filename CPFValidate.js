// 705.484.450-52 + 070.987.720-03
class CPFValidate {
    constructor(sendCPF) {
        Object.defineProperty(this, 'cleanCPF', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: sendCPF.replace(/\D+/g, '')
        });
    }

    isSequence() {
        return this.cleanCPF.charAt(0).repeat(11) === this.cleanCPF;
    }

    createNewCPF(){
        const cpfWithoutDigitis = this.cleanCPF.slice(0, -2);
        const digit1 = CPFValidate.createDigit(cpfWithoutDigitis);
        const digit2 = CPFValidate.createDigit(cpfWithoutDigitis + digit1);
        this.newCPF = cpfWithoutDigitis + digit1 + digit2;
    }

    static createDigit(cpfWithoutDigitis){
        let total = 0;
        let reverse = cpfWithoutDigitis.length + 1;

        for (let stringnumeric of cpfWithoutDigitis){
         total += reverse * Number(stringnumeric);
            reverse--;
        }

        const digit = 11 - (total % 11);
        return digit <= 9 ? String(digit) : '0';
    }

    validates() {
        if (!this.cleanCPF) return false;
        if (typeof this.cleanCPF !== 'string') return false;
        if (this.cleanCPF.length !== 11) return false;
        if (this.isSequence()) return false;
        this.createNewCPF()
        
        return this.newCPF === this.cleanCPF;
    }
}

let CPFvalidation = new CPFValidate('070.987.720-03');
//CPFvalidation = new CPFValidate('999.999.999-99');
//console.log(CPFvalidation.validates());

if (CPFvalidation.validates()){
    console.log('CPF válido');
} else {
    console.log('CPF inválido');
}