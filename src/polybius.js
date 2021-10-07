// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const alphabet = [
    ["a", "b", "c", "d", "e"],
    ["f", "g", "h", "i", "k"],
    ["l", "m", "n", "o", "p"],
    ["q", "r", "s", "t", "u"],
    ["v", "w", "x", "y", "z"],
  ]
  function polybius(input, encode = true) {
    let result = ""
    if (encode) {
      for (let i = 0; i < input.length; i++) {
        if (input[i] == " ") result += " "
        else if (input[i] == "j") result += "42"
        else {
          for (let j = 0; j < 5; j++) {
            for (let k = 0; k < 5; k++) {
              if (input[i].toLowerCase() == alphabet[j][k]) result += `${k + 1}${j + 1}`
            }
          }
        }
      }
      return result
    } else {
      while (input.length != 0) {
        if (input[0] == " ") {
          result += " "
          input = input.slice(1)
        } else if (!/[1-5][1-5]/.test(input.slice(0, 2))) {
          return false
        } else if (input.slice(0, 2) == "42") {
          result += "(i/j)"
          input = input.slice(2)
        } else {
          result += alphabet[input.slice(1, 2) - 1][input.slice(0, 1) - 1]
          input = input.slice(2)
        }
      }
      return result
    }
  }
  return {
    polybius,
  }
})()

module.exports = { polybius: polybiusModule.polybius }
