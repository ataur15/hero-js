/**
 * call(), apply() method use kore kono ekta object er method ke onno ekta object e use korte paro
 */

 const kibria = {
    id: 101,
    name: "kibria",
    money: 5000,
    major: "mathmetics",
    treatDey: function (expense, tax) {
        this.money = this.money - expense - tax;
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

// call()
kibria.treatDey.call(jamil, 200, 20);

// apply()
kibria.treatDey.apply(jamil, [300, 50]);


/*
kono ekta object er moddhe method ache sei method ta ami onno ekta object e use korbo. 3 ta method diyei same kaj ta kora jay.
bind() oi function ta ke bind kore notun ekta function create kore.
call() sorasori oi function ta ke call kore r prothom argument hisebe object ke dite hoy baki arguments gulo comma separation kore dite hoy
apply() sorasori oi function ke call kore r prothom argument hisebe object ke dite hoy baki argument gulo ekta array kore dite hoy
*/