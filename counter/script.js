
function createCounter() {
  let counterValue = 0;

  function count() {
    counterValue++
    return counterValue
  };

  count.reset = function () {
    counterValue = 0
  }
  return count;
}

const count = createCounter()

console.log(count())
console.log(count())
console.log(count())
console.log(count())
count.reset()
console.log(count())
console.log(count())
console.log(count())


// Reset and Decrement counter
console.log("counter 2")
function createCounter2() {
  let value = 0;
  function count() {
    console.log(++value)
  }
  count.decrease = function () {
    console.log(--value)
  }
  count.reset = function () {
    value = 0
    console.log(value)
  }
  return count
}

const count2 = createCounter2()

count2()
count2()
count2()
count2.decrease()
count2()
count2()
count2.reset()
count2()


// Increment, Decrement and Reset counter using function constructor way
console.log("counter 3")

function CounterFn(){
  let value = 0
  
  this.increment = function (){
    console.log(++value);
  }

  this.decrement = function (){
    console.log(--value)
  }

  this.reset = function (){
    value=0
    console.log(0)
  }
}

const counter3 = new CounterFn()

counter3.increment()
counter3.increment()
counter3.increment()
counter3.decrement()
counter3.reset()
counter3.increment()

// Increment, Decrement and Reset counter using class constructor way

console.log("counter 4")


class Counter {
  constructor(initialValue = 0){
    this.value = initialValue
  }
  increment(){
    console.log(++this.value)
  }
  decrement(){
    console.log(--this.value)

  }
  reset(){
    this.value=0
    console.log(this.value)
  }
}


const counter4 = new Counter()

counter3.increment()
counter3.increment()
counter3.increment()
counter3.decrement()
counter3.reset()
counter3.increment()