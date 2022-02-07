class Player {
    constructor(name, country) {
        this.name = name;
        this.country = country;
    }

    /* Getter and Setter behave korbe function er moto but access
    korte hobe propertyr moto kore */

    get getName() {
        return this.country;
    }

    set setName(name) {
        this.name = name;
    }
}

let tamim = new Player('Tamim', 'Bangaldesh');
console.log(tamim.getName); // Bangladesh

tamim.setName = 'Mushfiq';
console.log(tamim.name); // Mushfiq
