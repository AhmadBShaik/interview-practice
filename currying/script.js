// using bind
let multiply=(x,y) => {
  return x*y;
}

let multiplyByTwo = multiply.bind(this,2)
console.log(multiplyByTwo(5))


let multiplyByThree = multiply.bind(this,3)
console.log(multiplyByThree(5))

// using closures

let curryMultiply = function (x){
  return function(y){
    return x*y
  }
}


const curryMultiplyByTwo = curryMultiply(2)
console.log(curryMultiplyByTwo(5))

const curryMultiplyByThree= curryMultiply(3)
console.log(curryMultiplyByThree(5))