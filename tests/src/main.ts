const fizzBuzz = (num: number): string => {
  const divisibleBy = (num: number, div: number): boolean => {
    return num % div === 0
  }

  switch (true) {
    case (divisibleBy(num, 3) && divisibleBy(num, 5)): {
      return 'fizzbuzz'
    }
    case (divisibleBy(num, 3)): {
      return 'fizz'
    }
    case (divisibleBy(num, 5)): {
      return 'buzz'
    }
    default: {
      return 'who knows'
    }
  }
}

interface Lengthwise {
  length: number
}

function lengthFinder<T extends Lengthwise> (arg: T): T {
  return arg
}

const merger = (obj: object, obj2: object): object => {
  return {
    ...obj,
    ...obj2
  }
}

function valuer<T, K extends keyof T> (obj: T, key: K) {
  return obj[key]
}

const dbUrlFinder = (dbConfig: object): object => {
  for (const property in dbConfig) {
    for (const key in dbConfig[property]) {
      const dbName = dbConfig[property][key]
      dbConfig[property][key] = dbName?.conn || dbName.direct
    }
  }

  return dbConfig
}

const halfer = (num1: number, num2: number): number => {
  const smallestNum = Math.min(num1, num2)

  return parseFloat((smallestNum / 2).toFixed(2))
}

const wordFinder = (arg: string[]): string => {
  const result = arg.sort((a, b) => {
    // order desc
    return b.length - a.length
  })
  return result[0]
}

const titleCase = (arg: string) => {
  const list = arg.split(' ')
  const result = list.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  })
  return result.join(' ')
}

const repeatStringNumTimes = (str: string, num: number): string => {
  return str.repeat(num)
}

const palindrome = (str: string) => {
  const word = str.replace(/\W/g, '')
  return word === word.split('').reverse().join('')
}

const bubbleSort = (list: number[]) => {
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length - 1; j++) {
      if (list[j] > list[j + 1]) {
        let swap = list[j];
        list[j] = list[j + 1];
        list[j + 1] = swap;
      }
    }
  }
  return list
}

const multiplesOf3And5 = (arg: number[]): number[] => {
  const result = arg.filter(num => (num % 3 === 0) || (num % 5 === 0))
  return result
}

export {
  fizzBuzz,
  lengthFinder,
  valuer,
  merger,
  dbUrlFinder,
  halfer,
  wordFinder,
  titleCase,
  repeatStringNumTimes,
  palindrome,
  bubbleSort,
  multiplesOf3And5
}