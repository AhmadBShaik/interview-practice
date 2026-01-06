
function createCounter() {
  let counterValue = 0;

  function count(){
    counterValue++
    return counterValue
  };

  count.reset=function(){
    counterValue=0
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
