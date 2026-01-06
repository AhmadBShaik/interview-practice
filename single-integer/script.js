const findSingleInteger = (arr) => {
  const occurancesMap = new Map();

  for (const item of arr) {
    occurancesMap.set(item, (occurancesMap.get(item) || 0) + 1)
  }
  for (const [item, occurances] of occurancesMap) {
    if (occurances === 1) {
      return item
    }
  }
}

const result = findSingleInteger([10, 2, 2, 1, 0, 0, 10])
console.log(result)

// Time Complexity O(n), Space Complexit O(n)