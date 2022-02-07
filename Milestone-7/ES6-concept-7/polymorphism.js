// Parent Class
class Person {
    constructor() {
        this.name = "Sakib";
        this.age = 35;
    }
    play() {
        console.log(`${this.name} is playing`);
    }
}

// Child Class
class Cricketer extends Person {
    constructor() {
        super();
        this.type = "All rounder";
        this.country = "Bangladesh";
    }

    // Modified the play method
    play() {
        console.log(`${this.name} is playing cricket`);
    }
}

const sakib = new Cricketer();
sakib.play();