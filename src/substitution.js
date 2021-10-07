// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  function substitution(input, key, encode = true) {
    if (!key || key.length != 26) return false
    for (let i = 0; i < 26; i++) {
      for (let j = i + 1; j < 26; j++) {
        if (key[i] == key[j]) return false
      }
    }
    let result = ""
    for (let i = 0; i < input.length; i++) {
      if ((encode ? alphabet : key).includes(input[i].toLowerCase())) {
        result += (encode ? key : alphabet)[
          (encode ? alphabet : key).indexOf(input[i].toLowerCase())
        ]
      } else result += input[i]
    }
    return result
  }
  return {
    substitution,
  }
})()

module.exports = { substitution: substitutionModule.substitution }
