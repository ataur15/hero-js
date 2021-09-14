const promise1 = Promise.resolve(`Promise 1 resolved`);

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`Promise 2 resolved`);
    }, 3000);
});

/* normal promise run */
// promise1.then(result => console.log(result));
// promise2.then(result => console.log(result));

/*
sobgula promise eksathe run hobe and jei promise ta age resolved hobe seitar result dibe.
Orthat 2 tar moddhe race hobe je age resolved hobe takei result hisbe dibe
*/
Promise.race([promise1, promise2])
    .then((res) => {
        console.log(res);
    });