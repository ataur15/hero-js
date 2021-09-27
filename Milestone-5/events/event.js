// Different types of Click events

function redColor () {
    document.body.style.backgroundColor = "red";
}

let yellowButton = document.getElementById('yellow-button');
yellowButton.onclick = yellowColor;
function yellowColor () {
    document.body.style.backgroundColor = "yellow";
}

let blueButton = document.getElementById('blue-button');
blueButton.onclick = function () {
    document.body.style.backgroundColor = "blue"
};

let grayButton = document.getElementById('gray-button');
grayButton.onclick = () => {
    document.body.style.backgroundColor = "gray";
}

let blackButton = document.getElementById('black-button');
blackButton.addEventListener('click', blackColor)
function blackColor () {
    document.body.style.backgroundColor = "black";
}

let hotpinkButton = document.getElementById('hotpink-button');
hotpinkButton.addEventListener('click', function () {
    document.body.style.backgroundColor = "hotpink";
});

let indianredButton = document.getElementById('indianred-button');
indianredButton.addEventListener('click', () => {
    document.body.style.backgroundColor = "indianred";
});

document.getElementById('indigo-button').addEventListener('click', function () {
    document.body.style.backgroundColor = "indigo";
});

document.getElementById('lightblue-button').addEventListener('click', () => {
    document.body.style.backgroundColor = "lightblue";
});

document.getElementById('khaki-button').addEventListener('click', () => document.body.style.backgroundColor ='khaki');
