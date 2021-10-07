const { expect } = require("chai")
const { substitution } = require("../src/substitution.js")

describe("substitution()", () => {
  describe("handles invalid key", () => {
    const input = "substitution"
    it("should return false if the given key isn't exactly 26 characters long", () => {
      const key = "qwertyuiopasdfghjklzxcvbn"
      const actual = substitution(input, key)
      expect(actual).to.be.false
    })
    it("should return false if there are any duplicate characters in the given key", () => {
      const key = "qwertyuiopasdfghjklzxcvbnq"
      const actual = substitution(input, key)
      expect(actual).to.be.false
    })
  })
  describe("ignores capital letters", () => {
    it("should get the same result with different capitalization", () => {
      const key = "qwertyuiopasdfghjklzxcvbnm"
      const upper = substitution("Substitution", key)
      const lower = substitution("substitution", key)
      expect(upper).to.equal(lower)
    })
  })
  describe("maintains spaces and symbols", () => {
    it("should maintain spaces and other nonalphabetic symbols when encoding", () => {
      const actual = substitution("Here's a sentence.", "qwertyuiopasdfghjklzxcvbnm")
      const expected = "itkt'l q ltfztfet."
      expect(actual).to.equal(expected)
    })
    it("should maintain spaces and other nonalphabetic symbols when decoding", () => {
      const actual = substitution("itkt'l q ltfztfet.", "qwertyuiopasdfghjklzxcvbnm", false)
      const expected = "here's a sentence."
      expect(actual).to.equal(expected)
    })
  })
  describe("correctly translates the given phrase", () => {
    it("should correctly encode the given phrase", () => {
      const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")
      const expected = "jrufscpw"
      expect(actual).to.equal(expected)
    })
    it("should correctly decode the given phrase", () => {
      const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false)
      const expected = "thinkful"
      expect(actual).to.equal(expected)
    })
  })
})
