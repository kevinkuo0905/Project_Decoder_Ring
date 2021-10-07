const { expect } = require("chai")
const { polybius } = require("../src/polybius.js")

describe("polybius()", () => {
  describe("handles encoding and decoding letters i and j", () => {
    it("should translate the letters i and j to 42.", () => {
      const expected = "4242"
      const actual = polybius("ij")
      expect(actual).to.equal(expected)
    })
    it("should translate 42 to (i/j)", () => {
        const expected = "(i/j)"
        const actual = polybius("42",false)
        expect(actual).to.equal(expected)
    })
  })
  describe("ignores capital letters", () => {
    it("should get the same result with different capitalization", () => {
      const upper = polybius("Polybius")
      const lower = polybius("polybius")
      expect(upper).to.equal(lower)
    })
  })
  describe("maintains spaces", () => {
    it("should maintain spaces when encoding", () => {
      const actual = polybius("Here is a sentence")
      const expected = "32512451 4234 11 3451334451333151"
      expect(actual).to.equal(expected)
    })
    it("should maintain spaces when decoding", () => {
      const actual = polybius("32512451 4234 11 3451334451333151", false)
      const expected = "here (i/j)s a sentence"
      expect(actual).to.equal(expected)
    })
  })
})
