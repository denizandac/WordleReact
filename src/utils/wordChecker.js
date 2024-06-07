const dictionary = require("sozlukjs");
const randomWordGenerator = require("rastgelekelime");

export async function EligibilityChecker(word, letterCount) {
  const response = await dictionary.TDKDictionary.getMeaningData(word);
  if (word.length < letterCount) {
    return false;
  } else if (response.error) {
    console.log(response.error);
    //Shake the screen
    return false;
  }
  console.log(response[0].madde.toUpperCase());
  return true;
}
export function LetterChecker(word, expectedWord) {
  let newWord = [];
  for (let i = 0; i < word.length; i++) {
    newWord.push({ letter: word[i], type: "none" });
    for (let j = 0; j < expectedWord.length; j++) {
      if (word[i] === expectedWord[j]) {
        if (i === j) newWord[i].type = "exactPosition";
        else newWord[i].type = "includes";
        break;
      }
    }
  }
  return newWord;
}

export function GenerateRandomWord() {
  const randomWord = randomWordGenerator(1);
  //console.log(randomWord);
  if (randomWord[0].length === 5) {
    return randomWord[0].toUpperCase();
  }
  return GenerateRandomWord();
}
