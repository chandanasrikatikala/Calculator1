let display = document.getElementById('display');

function clearDisplay() {
    display.innerText = '0';
}

function appendCharacter(character) {
    if (display.innerText === '0' && character !== '.') {
        display.innerText = character;
    } else {
        display.innerText += character;
    }
}

function calculateResult() {
    try {
        display.innerText = eval(display.innerText);
    } catch (e) {
        display.innerText = 'Error';
    }
}

