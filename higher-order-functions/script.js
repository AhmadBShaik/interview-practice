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