// const db = {}

const addToDb = item => {
    let db = getDb();

    if (item in db) {
        db[item] = db[item] + 1;
    } else {
        db[item] = 1;
    }

    saveToLocalStorage(db);
    // console.log(db);
}

const removeFromDb = item => {
    let db = getDb();
    delete db[item];
    saveToLocalStorage(db);
}

const getDb = () => {
    let getItems = localStorage.getItem('items');
    // console.log(typeof (getItems), getItems);
    // console.log(typeof (convertToObject), convertToObject);
    if (getItems) {
        getItems = JSON.parse(getItems);
    } else {
        getItems = {};
    }

    return getItems;
    // return db;
}

// save to the local storage
const saveToLocalStorage = dbObj => {
    const dbJSON = JSON.stringify(dbObj);
    localStorage.setItem('items', dbJSON);
}