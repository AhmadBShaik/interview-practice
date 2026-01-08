// Function statement / Function declaration
function func1(){
  console.log("func1")
}

// Function expression
const func2 = function (){
  console.log("func2")
};

// Anonymous functions

// function(){
//   console.log("anonymous function")
// }
(function(){
  console.log("anonymous function")
})();

// () => { console.log("anonymous arrow function")}
(function(){
  console.log("anonymous arrow function")
})();

// Named Function Expression
const func3 = function f3(){
  console.log("func3")
}

func3()

const nums = function f3(max){
  if(max===0){
    return;
  }
  console.log(max)
  f3(max-1)
}

nums(5)


// Difference b/w Params and Arguments
const func4 = function (param1, param2){ //--> These are parameters of a function
  console.log(param1, param2)
}

func4(1,3) // --> These are arguments

// First class functions / First class citizens -> The ability to pass function as an argument to another function as a value

const func5 = function (callback){
  callback()
}

func5(function (){console.log("Hello")})

// Arrow function

const func6 = () => console.log('Func6')
func6();

(() => console.log('IIFE using Arrow function'))()