// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  

  function caesar(input, shift, encode = true) {

    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;

    const actualAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");

    const splitMessage = input.toLowerCase().split(" ");
    if (!encode) shift = -shift;

    let caesarMessage = [];
    //for each word
    for(let i=0; i<splitMessage.length; i++) {
      const currentWord = splitMessage[i];
      let caesarWord = [];
      //for each letter 
      for(let j=0; j<currentWord.length; j++) {
        const currentLetter = currentWord[j];

        if (!actualAlphabet.some((letter) => letter === currentLetter)) caesarWord.push(currentLetter);
        else {
          const caesarLetter = letterShift(currentLetter, shift);
          caesarWord.push(caesarLetter);
        }
      }
      caesarMessage.push(caesarWord.join(""));
    }
    return caesarMessage.join(" ");
  }

  function letterShift(letter, shift) {
    const actualAlphabet = "abcdefghijklmnopqrstuvwxyz";

    for (i=0; i<actualAlphabet.length; i++) {
      if (letter === actualAlphabet[i]) {
        let index;
        if (i+shift > 25) index = (i+shift) - 26;
        else if (i+shift < 0)  index = (i+shift) + 26;
        else index = i+shift;

        return actualAlphabet[index];
      }
    }
  }

  return {
    caesar, letterShift
  };
})();

module.exports = { caesar: caesarModule.caesar, letterShift: caesarModule.letterShift };
