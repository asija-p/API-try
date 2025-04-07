
fetch("https://random-word-api.vercel.app/api?words=1&length=5")
  .then(response => response.json())
  .then(([word]) => {
    document.getElementById("word").textContent = `Your word: ${word}`;
  })
  .catch(error => {
    console.error("Error fetching word:", error);
    document.getElementById("word").textContent = "Could not load word.";
  });

let wordList = [];

fetch('https://raw.githubusercontent.com/dwyl/english-words/master/words.txt')
    .then(response => response.text())
    .then(data => {
        wordList = data.split('\n').map(word => word.trim().toLowerCase()).filter(word => word.length === 5);
    });

function checkWord() {
    const inputWord = document.getElementById('wordInput').value.toLowerCase().trim();
    const result = document.getElementById('result');

    if (inputWord.length !== 5) {
        result.textContent = "Please enter exactly 5 letters!";
        result.style.color = "red";
        return;
    }

    if (wordList.includes(inputWord)) {
        result.textContent = `"${inputWord}" is a valid 5-letter word!`;
        result.style.color = "green";
    } else {
        result.textContent = `"${inputWord}" is NOT a valid 5-letter word.`;
        result.style.color = "red";
    }
}