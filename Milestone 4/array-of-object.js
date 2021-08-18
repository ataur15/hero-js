let phones = [
    {
        model: 'oppo t5',
        price: 15000,
        camera: 16,
        storage: 64
    },
    {
        model: 'samsungA50',
        price: 30000,
        camera: 20,
        storage: 32
    },
    {
        model: 'one plus 3',
        price: 13000,
        camera: 18,
        storage: 16
    },
    {
        model: 'sony mt',
        price: 11000,
        camera: 8,
        storage: 10
    },
]

function cheapestPhone () {
    let cheapest = phones[0];
    for (let phone of phones) {
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    console.log(cheapest);
}

cheapestPhone();