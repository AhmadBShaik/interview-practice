const radii = [1, 3, 4, 6]


const area =(radius) => Math.PI * radius * radius
const circumference = (radius) => 2 * Math.PI * radius 
const diameter = (radius) => 2 *radius

const calculate = (radii,action) => {
   const result = []
  for (let radius of radii) {
    result.push(action(radius))
  }
  return result
}

console.log('manual usage')
console.log(calculate(radii, area))
console.log(calculate(radii, circumference))
console.log(calculate(radii, diameter))

console.log('using with built-in hof')

console.log(radii.map(area))
console.log(radii.map(circumference))
console.log(radii.map(diameter))

console.log('using with custom hof and attaching the implementation to built-in Array')

Array.prototype.calculate = function(action) {
   const result = []
  for (let radius of this) {
    result.push(action(radius))
  }
  return result
}

console.log(radii.calculate(area))
console.log(radii.calculate(circumference))
console.log(radii.calculate(diameter))

console.log('using with custom hof without modifying built-in Array')

class RadiusArray extends Array{
  calculate(action){
    const result = []
    for(let radius of this){
      result.push(action(radius))
    }
    return result
  }
}

const radiusArray = new RadiusArray(...radii)
console.log(radiusArray.calculate(area))
console.log(radiusArray.calculate(circumference))
console.log(radiusArray.calculate(diameter))


const user = [
  { firstName: "Keanu", lastName: "Reeves", age: 52 },
  { firstName: "Taylor", lastName: "Swift", age: 34 },
  { firstName: "Lionel", lastName: "Messi", age: 36 },
  { firstName: "Serena", lastName: "Williams", age: 34 },
  { firstName: "Elon", lastName: "Musk", age: 52 },
  { firstName: "Zendaya", lastName: "Coleman", age: 27 }
];

const result = user.reduce((acc, val) => {
  return Object.keys(acc).includes(val.age.toString()) ?
    { ...acc, [val.age]: [...acc[val.age], val] } :
    { ...acc, [val.age]: [val] }
}, {})

console.log(result)

const resultCount = user.reduce((acc, val) => {
  return Object.keys(acc).includes(val.age.toString()) ?
    { ...acc, [val.age]: acc[val.age] + 1 } :
    { ...acc, [val.age]: 1 }
}, {})

console.log(resultCount)

const resultCount2 = user.reduce((acc, val) => {
  return acc[val.age] ?
    acc[val.age] = acc[val.age] + 1 :
    acc[val.age] = 1
}, {})

console.log(resultCount)
