/* console.log('This is first');
console.log('This is second');
setInterval(() => {
   console.log('I am running after 3 seconds');
}, 2000);
console.log('This is third');
console.log('This is fourth'); */


/* let seconds = 0;
setInterval(() => {
    seconds++;
    console.log(seconds);
},1000); */


let count = 0;
const timeId = setInterval(() => {
    count++;
    console.log(count);
    if (count > 13) {
        clearInterval(timeId)
    }
},1000);
