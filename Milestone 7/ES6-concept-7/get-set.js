class Player {
    constructor (name, country) {
        this.name = name;
        this.country = country;
    }

    // set and get dekhte function er moto but access korte hobe propertyr moto
    get getName () {
        return this.country;
    }

    set setName (name) {
        this.name = name;
    }
}

let tamim = new Player('Tamim', 'Bangaldesh');
console.log(tamim.getName);

tamim.setName = 'Mushfiq';
console.log(tamim.name);
