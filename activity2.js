function capitalized (sentence) {
      const words = sentence.split(" ")
      const newArray = []
      for (const word of words) {
            let firstLetter = word.substring(0, 1)
            firstLetter = firstLetter.toUpperCase()
            let restLetters = word.substring(1)
            newArray.push(firstLetter + restLetters)
      }
      return newArray.join(" ");
}
console.log(
      capitalized("eddie joy s. dampiganon"))
console.log(
      capitalized("bachelor of science in information technology"))