function reverseString() {
    const inputString = document.getElementById('inputString').value;
    const reversedString = inputString.split('').reverse().join('');
    document.getElementById('result').textContent = reversedString;
}

function reverseStringAlternative1() {
    const inputString = document.getElementById('inputString').value;
    let reversedString = '';
    for (let i = inputString.length - 1; i >= 0; i--) {
        reversedString += inputString[i];
    }
    document.getElementById('result').textContent = reversedString;
}

function reverseStringAlternative2() {
    const inputString = document.getElementById('inputString').value;
    const reversedString = Array.from(inputString).reduce((acc, char) => char + acc, '');
    document.getElementById('result').textContent = reversedString;
}

document.querySelector('button').addEventListener('click', reverseString);
