export function EligibilityChecker(word, letterCount, dictionary) {
  if (word.length < letterCount) {
    return false;
  }
  //  else if (!dictionary.includes(word)) {
  //   return false;
  // }
  return true;
}
export function LetterChecker(word, expectedWord) {
  let letterCount = 0;
  let newWord = [];
  for (let i = 0; i < word.length; i++) {
    newWord.push({ letter: word[i], type: "none" });
    for (let j = 0; j < expectedWord.length; j++) {
      if (word[i] === expectedWord[j]) {
        if (i === j) newWord[i].type = "exactPosition";
        else newWord[i].type = "includes";
        letterCount++;
        break;
      }
    }
  }
  return newWord;
}
