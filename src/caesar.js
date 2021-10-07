// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  function caesar(input, shift, encode = true) {
    if (!shift || shift == 0 || shift > 25 || shift < -25) return false
    let result = ""
    for (let i = 0; i < input.length; i++) {
      if (alphabet.includes(input[i].toLowerCase())) {
        result +=
          alphabet[(alphabet.indexOf(input[i].toLowerCase()) + (encode ? 1 : -1) * shift + 26) % 26]
      } else result += input[i]
    }
    return result
  }
  return {
    caesar,
  }
})()

module.exports = { caesar: caesarModule.caesar }
