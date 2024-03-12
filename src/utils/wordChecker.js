export function lessLength(word, dictionary) {
  if (word.length < 5) {
    return false;
  } else if (!dictionary.includes(word)) {
    return false;
  }
  return true;
}
