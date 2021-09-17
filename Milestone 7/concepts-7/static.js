class Player {
    constructor (name) {
        this.name = name;
    }

    // normal method
    eat () {
        console.log(`${this.name} is eating`);
    }

    // static method
    static play () {
        console.log(`I am static method`);
    }
}

let sakib = new Player('Sakib');
sakib.eat();

// direct access to the function
Player.play();