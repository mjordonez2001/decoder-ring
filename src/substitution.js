// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  

  function substitution(input, alphabet = 0, encode = true) {
    
    if (alphabet.length !== 26 || alphabet === 0) return false;
    input = input.toLowerCase();
    
    let alphabetArray = alphabet.split("");
    //checks if each letter is unique
    for(let i=0; i<alphabetArray.length; i++) {
      let count =0;
      for(let j=0; j<alphabetArray.length; j++) {
        if (alphabetArray[i] == alphabetArray[j]) count++;
      }
      if (count > 1) return false;
    }

    let fromAlphabet, toAlphabet;
    if (encode) {
      fromAlphabet = "abcdefghijklmnopqrstuvwxyz";
      toAlphabet = alphabet;
    }
    else {
      fromAlphabet = alphabet;
      toAlphabet = "abcdefghijklmnopqrstuvwxyz";
    }

    let subMessage = [];
    const splitMessage = input.split(" ");
    //for each word
    for(let i=0; i<splitMessage.length; i++) {
      const currentWord = splitMessage[i];
      let subWord = [];
      //for each letter
      for(let j=0; j<currentWord.length; j++) {
        const currentLetter = currentWord[j];
        const subLetter = letterSub(fromAlphabet, toAlphabet, currentLetter);

        subWord.push(subLetter);
      }

      subMessage.push(subWord.join(""));
    }

    return subMessage.join(" ");

  }

  function letterSub(fromAlphabet, toAlphabet, letter) {

    //find index in normal alphabet
    let index;
    for(let i=0; i<fromAlphabet.length; i++) {
      if (letter === fromAlphabet[i]) {
        index = i;
      }
    }
    return toAlphabet[index];
  }

  return {
    substitution, letterSub
  };
})();

module.exports = { substitution: substitutionModule.substitution, letterSub: substitutionModule.letterSub };
