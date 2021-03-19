import {
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
} from '../main'

test('should return fizz if number is divisible by 3', () => {
  expect(fizzBuzz(3)).toBe('fizz')
})

test('should return buzz if number is divisible by 5', () => {
  expect(fizzBuzz(5)).toBe('buzz')
})

test('should return fizzbuzz if number is divisible by 3 and 5', () => {
  expect(fizzBuzz(15)).toBe('fizzbuzz')
})

test('should return who knows if number is not divisible by 3 or 5', () => {
  expect(fizzBuzz(7)).toBe('who knows')
})


test('should return the length of the array', () => {
  const input = [1, 2, 3, 4, 5]
  expect(lengthFinder(input)).toBe(input)
})

test('should return the merged objects', () => {
  const input = {
    key: 1,
    key2: 2
  }

  const input2 = {
    key3: 3,
    key4: 4
  }

  const result = {
    key: 1,
    key2: 2,
    key3: 3,
    key4: 4
  }

  expect(merger(input, input2)).toStrictEqual(result)
})

test('it should return the value from the object', () => {
  const obj = {
    key: 1
  }
  expect(valuer(obj, 'key')).toBe(1)
})

test('it should return the conn url as the master url', () => {
  const input = {
    tenant: {
      master: {
        conn: 'example.com',
        direct: 'exampler.com'
      },
      readonly: {
        direct: 'exampler.com'
      }
    }
  }

  const result = {
    tenant: {
      master: 'example.com',
      readonly: 'exampler.com'
    }
  }

  expect(dbUrlFinder(input)).toEqual(expect.objectContaining(result))
})

test('Given two numbers, a and b, return half of whichever is smallest, as a float', () => {
  expect(halfer(20, 11)).toEqual(5.5)
})

test('return the longest word in an array', () => {
  const input = ['hello', 'my', 'favourite', 'job', 'is', 'cleaning']
  expect(wordFinder(input)).toEqual('favourite')
})

test('title case', () => {
  const input = 'hello my favourite job is cleaning'
  expect(titleCase(input)).toEqual('Hello My Favourite Job Is Cleaning')
})

test('repeatStringNumTimes', () => {
  const input = 'abc'
  expect(repeatStringNumTimes(input, 3)).toEqual('abcabcabc')
})

test('palindrome', () => {
  const input = 'race car'
  const input2 = 'not a palindrome'
  expect(palindrome(input)).toEqual(true)
  expect(palindrome(input2)).toEqual(false)
})

test('bubbleSort', () => {
  const input = [-5, 2, 33, 10, -7]
  expect(bubbleSort(input)).toEqual([-7, -5, 2, 10, 33])
})

test('multiplesOf3And5', () => {
  const input = (start, end) => {
    return Array(end - start + 1).fill(undefined).map((_, idx) => start + idx)
  }
  expect(multiplesOf3And5(input(1, 1000))).toEqual([3, 5, 6, 9, 10, 12, 15, 18, 20, 21, 24, 25, 27, 30, 33, 35, 36, 39, 40, 42, 45, 48, 50, 51, 54, 55, 57, 60, 63, 65, 66, 69, 70, 72, 75, 78, 80, 81, 84, 85, 87, 90, 93, 95, 96, 99, 100, 102, 105, 108, 110, 111, 114, 115, 117, 120, 123, 125, 126, 129, 130, 132, 135, 138, 140, 141, 144, 145, 147, 150, 153, 155, 156, 159, 160, 162, 165, 168, 170, 171, 174, 175, 177, 180, 183, 185, 186, 189, 190, 192, 195, 198, 200, 201, 204, 205, 207, 210, 213, 215, 216, 219, 220, 222, 225, 228, 230, 231, 234, 235, 237, 240, 243, 245, 246, 249, 250, 252, 255, 258, 260, 261, 264, 265, 267, 270, 273, 275, 276, 279, 280, 282, 285, 288, 290, 291, 294, 295, 297, 300, 303, 305, 306, 309, 310, 312, 315, 318, 320, 321, 324, 325, 327, 330, 333, 335, 336, 339, 340, 342, 345, 348, 350, 351, 354, 355, 357, 360, 363, 365, 366, 369, 370, 372, 375, 378, 380, 381, 384, 385, 387, 390, 393, 395, 396, 399, 400, 402, 405, 408, 410, 411, 414, 415, 417, 420, 423, 425, 426, 429, 430, 432, 435, 438, 440, 441, 444, 445, 447, 450, 453, 455, 456, 459, 460, 462, 465, 468, 470, 471, 474, 475, 477, 480, 483, 485, 486, 489, 490, 492, 495, 498, 500, 501, 504, 505, 507, 510, 513, 515, 516, 519, 520, 522, 525, 528, 530, 531, 534, 535, 537, 540, 543, 545, 546, 549, 550, 552, 555, 558, 560, 561, 564, 565, 567, 570, 573, 575, 576, 579, 580, 582, 585, 588, 590, 591, 594, 595, 597, 600, 603, 605, 606, 609, 610, 612, 615, 618, 620, 621, 624, 625, 627, 630, 633, 635, 636, 639, 640, 642, 645, 648, 650, 651, 654, 655, 657, 660, 663, 665, 666, 669, 670, 672, 675, 678, 680, 681, 684, 685, 687, 690, 693, 695, 696, 699, 700, 702, 705, 708, 710, 711, 714, 715, 717, 720, 723, 725, 726, 729, 730, 732, 735, 738, 740, 741, 744, 745, 747, 750, 753, 755, 756, 759, 760, 762, 765, 768, 770, 771, 774, 775, 777, 780, 783, 785, 786, 789, 790, 792, 795, 798, 800, 801, 804, 805, 807, 810, 813, 815, 816, 819, 820, 822, 825, 828, 830, 831, 834, 835, 837, 840, 843, 845, 846, 849, 850, 852, 855, 858, 860, 861, 864, 865, 867, 870, 873, 875, 876, 879, 880, 882, 885, 888, 890, 891, 894, 895, 897, 900, 903, 905, 906, 909, 910, 912, 915, 918, 920, 921, 924, 925, 927, 930, 933, 935, 936, 939, 940, 942, 945, 948, 950, 951, 954, 955, 957, 960, 963, 965, 966, 969, 970, 972, 975, 978, 980, 981, 984, 985, 987, 990, 993, 995, 996, 999, 1000])
})