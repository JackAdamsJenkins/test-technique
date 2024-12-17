function isPalindrome() {
    const inputString = document.getElementById('inputString').value;
    const reversedString = inputString.split('').reverse().join('');
    const result = inputString.toLowerCase() === reversedString.toLowerCase();
    document.getElementById('result').textContent = result;
}

document.querySelector('button').addEventListener('click', isPalindrome);
