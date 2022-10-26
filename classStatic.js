class RemoteControl {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }
    //Instance Methods
    increaseVolume() {
        this.volume += 2;
    }

    decreaseVolume() {
        this.volume -= 2;
    }
    //Static Method
    static changeBatery() {
        console.log('Trocou a bateria');
        // console.log(this.volume); => underfined
    }
}

const control1 = new RemoteControl('LG')
control1.increaseVolume();
control1.increaseVolume();
control1.increaseVolume();
control1.increaseVolume();
control1.increaseVolume();
control1.decreaseVolume();
// control1.changeBatery(); => erro, methods is static and belongs class constructor
RemoteControl.changeBatery();

console.log(control1);