class Support {
    name;
    address = 'BD';
    designation = "web developer";
    constructor(param) {
        this.name = param;
    }
    startSession() {
        console.log(this.name, "start a support session");
    }
}

const amir = new Support("Amir Khan");
const sakib = new Support("Sakib Khan");
console.log(amir);
console.log(sakib);
sakib.startSession();