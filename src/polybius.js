// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  

  function polybius(input, encode = true) {
    
    input = input.toLowerCase();
    const splitMessage = input.split(" ");
    let polyMesssage = [];

    //decoding
    if (!encode) {
      let noSpaces = input.split(" ");
      noSpaces = noSpaces.join("");

      if (noSpaces.length % 2 !== 0) return false;

      //for each word
      for(let i=0; i<splitMessage.length; i++){
        const currentWord = splitMessage[i];
        let polyWord = [];
        //for each 2 numbers
        for(let j=0; j<currentWord.length; j += 2) {
          const polyLetter = toLetter(currentWord[j], currentWord[j+1])
          
          polyWord.push(polyLetter);
        }
        polyMesssage.push(polyWord.join(""));
      }

      return polyMesssage.join(" ");
    }

    //encoding

    //for each word
    for(let i=0; i<splitMessage.length; i++) {
      const currentWord = splitMessage[i];
      let polyWord = [];
      //for each letter
      for(let j=0; j<currentWord.length; j++) {
        const currentLetter = currentWord[j];
        const polyNumber = toNumber(currentLetter)

        polyWord.push(polyNumber);
      }
      polyMesssage.push(polyWord.join(""));
    }

    return polyMesssage.join(" ");
    
  }

  function toLetter(column, row) {
    const square = [
      ['a', 'b', 'c', 'd', 'e'],
      ['f', 'g', 'h', 'i/j', 'k',],
      ['l', 'm', 'n', 'o', 'p'],
      ['q', 'r', 's', 't', 'u'],
      ['v', 'w', 'x', 'y', 'z']
    ];

    return square[row-1][column-1];
  }

  function toNumber(letter) {
    const square = [
      ['a', 'b', 'c', 'd', 'e'],
      ['f', 'g', 'h', 'i/j', 'k',],
      ['l', 'm', 'n', 'o', 'p'],
      ['q', 'r', 's', 't', 'u'],
      ['v', 'w', 'x', 'y', 'z']
    ];

    if (letter === 'i' || letter === 'j') return "42";

    for(let i=0; i<5; i++) {
      for(let j=0; j<5; j++) {
        if (square[i][j] === letter) return `${j+1}${i+1}`;
      }
    }
  }

  return {
    polybius, toLetter, toNumber
  };
})();

module.exports = { polybius: polybiusModule.polybius, toLetter: polybiusModule.toLetter, toNumber: polybiusModule.toNumber };
