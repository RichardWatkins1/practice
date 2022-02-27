const reverseArray = (arg) => {
  let reversedArray = []
  
  for (let i = arg.length - 1; i >= 0; i--) {
    const newPostiion = (arg.length - 1) - i

    reversedArray[newPostiion] = arg[i]
  }
  return reversedArray
}

const reverseString = (arg) => {
  let word = ""

  for (let i = arg.length - 1; i >= 0; i--) {
    word += arg[i]
  }

  return word
}

const palindrome = arg => {
  const downCased = arg.toLowerCase()
  const onlyLetters = downCased.replace(/[^a-z]/g, "")

  let matchingWord = ""

  for (i = onlyLetters.length - 1; i >= 0; i--) {
    matchingWord += onlyLetters[i]
  }

  return matchingWord === onlyLetters
}

const toSnakeCase = arg => {
  for (key in arg) {
    const keyParts = key.split("_")
    const [first, second] = keyParts
    const snakeCaseKey = first + (second.charAt(0).toUpperCase() + second.slice(1))

    arg[snakeCaseKey] = arg[key]
    delete arg[key]
  }

  return arg
}

const add = arg => {
  for (i = 0; i <= arg.length - 1; i++) {
    arg[i] = arg[i] + 1 
  }

  return arg
}

const onlyEven = arg => {
  let evenArg = []
  for (i = 0; i < arg.length; i++) {
    if(arg[i] % 2 === 0) {
      evenArg.push(arg[i])
    }
  }

  return evenArg
}

module.exports = {
  reverseArray,
  reverseString,
  palindrome,
  toSnakeCase,
  add,
  onlyEven
}