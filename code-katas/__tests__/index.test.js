const { reverseArray, reverseString, palindrome, toSnakeCase, add, onlyEven } = require("../index")

describe("reverseArray", () => {
  it("reverses an array", () => {
    const args = [1,2,3,4,5]
    expect(reverseArray(args)).toEqual([5,4,3,2,1])
  })
})

describe("reverseString", () => {
  it("reverses an array", () => {
    const args = "position"
    expect(reverseString(args)).toEqual("noitisop")
  })
})

describe("palindrome", () => {
  it("reverses an array", () => {
    const args = "A man, a plan, a canal: Panama"
    expect(palindrome(args)).toEqual(true)
  })
})

describe("toSnakeCase", () => {
  it("reverses an array", () => {
    const args = {
      key_one: "123",
      key_two: "123",
      key_three: "123"
    }
    expect(toSnakeCase(args)).toEqual({
      keyOne: "123",
      keyTwo: "123",
      keyThree: "123"
    })
  })
})

describe("add", () => {
  it("increments numbers in an arry", () => {
    const args = [1,2,3]

    expect(add(args)).toEqual([2,3,4])
  })
})

describe("onlyEven", () => {
  it("increments numbers in an arry", () => {
    const args = [1,2,3]

    expect(onlyEven(args)).toEqual([2])
  })
})