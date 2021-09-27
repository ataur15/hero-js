const maComing = () => {
    alert('Maa! is coming, open the book');
}

const askPicnic = () => {
    const response = confirm('Are you going to picnic?');
    // console.log(response);
    if (response === true) {
        console.log('1000 tk fee daw');
    } else {
        console.log('Dure giya mor');
    }
}

const askName = () => {
    const name = prompt('What is your name?');
    if (name) {
        console.log(name);
    }
}