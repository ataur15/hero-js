// Selectors
let currentInput = document.querySelector('.currentInput');
let answerScreen = document.querySelector('.answerScreen');
let buttons = document.querySelectorAll('button');
let clearbtn = document.querySelector('#clear');

let realTimeScreenValue = [];

// To clear
clearbtn.addEventListener('click', () => {
    realTimeScreenValue = [''];
    answerScreen.innerHTML = 0;
    // Re-assign class name
    currentInput.className = 'currentInput'
    answerScreen.className = 'answerScreen';
    answerScreen.style.color = " rgba(150, 150, 150, 0.87)";
});

// Get value of any button clicked and display to the screen
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        // push in an empty array
        realTimeScreenValue.push(button.value);
        // display to the div
        currentInput.innerHTML = realTimeScreenValue.join('');

        // To evaluate answer in real time
        if (button.classList.contains('num_btn')) {
            let joining = realTimeScreenValue.join('');
            answerScreen.innerHTML = eval(joining);
            // console.log(joining);
        }

        // When clicked evaluate button
        if (button.id.match('evaluate')) {
            // Replace class name
            currentInput.className = 'answerScreen';
            answerScreen.className = 'currentInput';
            answerScreen.style.color = "white";
        }
    });
});