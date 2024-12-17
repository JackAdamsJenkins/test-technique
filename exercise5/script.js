function insertionSort() {
    const inputArray = document.getElementById('inputArray').value.split(',').map(Number);
    for (let i = 1; i < inputArray.length; i++) {
        const key = inputArray[i];
        let j = i - 1;
        while (j >= 0 && inputArray[j] > key) {
            inputArray[j + 1] = inputArray[j];
            j = j - 1;
        }
        inputArray[j + 1] = key;
    }
    document.getElementById('result').textContent = JSON.stringify(inputArray);
}

document.querySelector('button').addEventListener('click', insertionSort);