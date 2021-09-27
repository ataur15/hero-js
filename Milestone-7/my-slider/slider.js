const images = [
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg',
    'images/5.jpg',
    'images/6.jpg',
    'images/7.jpg',
    'images/8.jpg'
]

let imgElement = document.getElementById('slider');
let imgIndex = 0;

setInterval(() => {
    if (imgIndex >= images.length) {
        imgIndex = 0;
    }
    let imgUrl = images[imgIndex];
    imgElement.setAttribute('src', imgUrl);
    // console.log(imgUrl);
    imgIndex++;

}, 2000);