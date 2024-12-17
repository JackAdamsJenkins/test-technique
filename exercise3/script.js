function mostFrequent() {
    const inputArray = document.getElementById('inputArray').value.split(',').map(Number);
    const frequencyMap = {};
    let maxFrequency = 0;
    let mostFrequentElement;

    for (const num of inputArray) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
        if (frequencyMap[num] > maxFrequency) {
            maxFrequency = frequencyMap[num];
            mostFrequentElement = num;
        }
    }
    document.getElementById('result').textContent = mostFrequentElement;
}

document.querySelector('button').addEventListener('click', mostFrequent);