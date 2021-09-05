/**
 * bind() method use kore kono ekta object er method ke onno ekta object e use korte paro
 */

const kibria = {
    id: 101,
    name: "kibria",
    money: 5000,
    major: "mathmetics",
    treatDey: function (expense) {
        this.money = this.money - expense;
        console.log('here555', this);
        return this.money;
    }
}

const jamil = {
    id: 102,
    name: "jamil",
    money: 6000,
    major: "english"
}

// kibria.treatDey(100);

const jamilTreatDey = kibria.treatDey.bind(jamil);
jamilTreatDey(100);
