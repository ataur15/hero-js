class Player {
    constructor(name) {
        this.name = name;
    }

    // Normal method
    eat() {
        console.log(`${this.name} is eating`);
    }

    // Static method
    static play() {
        console.log(`I am static method`);
    }
}

let sakib = new Player('Sakib');
sakib.eat();

// Direct access to the function
Player.play();