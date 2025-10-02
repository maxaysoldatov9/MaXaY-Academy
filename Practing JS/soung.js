const lines = [
  { time: 7.0, line: "Cocaine all night long" },
  { time: 10.1, line: "When I die bury me with all my ice on" },
  { time: 13.5, line: "Witchcraft love chants" },
  { time: 16.0, line: "Whisper in my ear put me in a trance" },
  { time: 19.2, line: "Cocaine all night long" },
  { time: 22.2, line: "When I die bury me with all my ice on" }
];

let start = Date.now();
let currentLine = 0;

function showWordsInLine(line) {
  const words = line.line.split(" ");
  let wordIndex = 0;

  function showNextWord() {
    if (wordIndex < words.length) {
      process.stdout.write(words[wordIndex] + " ");
      wordIndex++;
      setTimeout(showNextWord, 350); // Подогнан под бит
    } else {
      process.stdout.write("\n");
    }
  }

  showNextWord();
}

function loop() {
  const now = (Date.now() - start) / 1000;

  if (currentLine < lines.length && now >= lines[currentLine].time) {
    showWordsInLine(lines[currentLine]);
    currentLine++;
  }

  if (currentLine < lines.length) {
    setTimeout(loop, 20);
  }
}

loop();
