const { expect } = require("chai")
const { caesar } = require("../src/caesar.js")

describe("caesar()", () => {
  describe("handles invalid shift values", () => {
    const input = "caesar"
    it("should return false if the shift value is equal to 0", () => {
      const actual = caesar(input, 0)
      expect(actual).to.be.false
    })
    it("should return false if the shift value is less than -25", () => {
      const actual = caesar(input, -26)
      expect(actual).to.be.false
    })
    it("should return false if the shift value is greater than 25", () => {
      const actual = caesar(input, 26)
      expect(actual).to.be.false
    })
    it("should return false if the shift value is not present", () => {
      const actual = caesar(input)
      expect(actual).to.be.false
    })
  })
  describe("ignores capital letters", () => {
    it("should get the same result with different capitalization", () => {
      const upper = caesar("Caesar", 1)
      const lower = caesar("caesar", 1)
      expect(upper).to.equal(lower)
    })
  })
  describe("wraps around the beginning or end of the alphabet", () => {
    it("should handle shifts that go past the end of the alphabet", () => {
      const actual = caesar("caesar", 20)
      const expected = "wuymul"
      expect(actual).to.equal(expected)
    })
    it("should handle shifts that go before the beginning of the alphabet", () => {
        const actual = caesar("caesar", -20)
        const expected = "igkygx"
        expect(actual).to.equal(expected)
      })
  })
  describe("maintains spaces and symbols", () => {
    it("should maintain spaces and other nonalphabetic symbols when encoding", () => {
      const actual = caesar("Here's a sentence.", 3)
      const expected = "khuh'v d vhqwhqfh."
      expect(actual).to.equal(expected)
    })
    it("should maintain spaces and other nonalphabetic symbols when decoding", () => {
      const actual = caesar("khuh'v d vhqwhqfh.", 3, false)
      const expected = "here's a sentence."
      expect(actual).to.equal(expected)
    })
  })
})
