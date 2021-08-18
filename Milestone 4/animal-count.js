function animalCount (miles) {
    const first10miles = 10;
    const second10miles = 50;
    const restMiles = 100;
    if (miles <= 10 ) {
        const firstAnimals = miles * first10miles;
        return firstAnimals;
    }
    else if (miles <= 20 ) {
        const first10MilesAnimals = 10 * first10miles;
        const totalmilse = miles - 10;
        const second10MilesAnimals = totalmilse * second10miles;
        const totalAnimals = first10MilesAnimals + second10MilesAnimals;
        return totalAnimals;
    }
    else {
        const first10MilesAnimals = 10 * first10miles;
        const second10MilesAnimals = 10 * second10miles;
        const totalmilse = miles - 20;
        const restMilesAnimala = totalmilse * restMiles;
        const totalAnimals = first10MilesAnimals + second10MilesAnimals + restMilesAnimala;
        return totalAnimals;
    }
}

let getAnimals = animalCount(21);
console.log(getAnimals);