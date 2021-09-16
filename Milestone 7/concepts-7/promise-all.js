const promise1 = Promise.resolve(`Promise 1 resolved`);

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`Promise 2 resolved`);
    }, 3000);
});

/* normal promise run */
// promise1.then(result => console.log(result));
// promise2.then(result => console.log(result));

/* sobgula promise eksathe run hobe and finally sobgular result eksathe dibe */
Promise.all([promise1, promise2])
    .then((res) => {
        console.log(res);
    });