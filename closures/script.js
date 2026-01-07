//------ 
let x=10
function func0(y){
  console.log(x+y)
}

func0(15)
// This is a closure, but debugger won't show as closure because it is in global context.
// ------


for(let i=0;i<3;i++){
  const log = () => {
    console.log(i);
  }
  setTimeout(log,(i + 1) *1000)
}

// -------

function func1() {
  let a = 5

  function innerFunc() {
    console.log(a)
  }
  a = 30
  innerFunc();
}

func1()


function func2() {
  let b = 90
  function func1() {
    let a = 5

    function innerFunc() {
      console.log(a, b)
    }
    a = 30
    innerFunc();
  }
  func1();
}
func2()


// Running a function only once
function withOnlyOnce(callback) {
  let ran = false;
  return function (...args) {
    if(!ran){
      // console.log(callback, args)
      ran=true
      callback.apply(this, args)
    }
  }
}

function fetchLocalizationData() {
  console.log('fetching localization data...')
}
const fetchLocalizationDataOnlyOnce = withOnlyOnce(fetchLocalizationData)
for (let i = 0; i < 10; i++) {
  fetchLocalizationDataOnlyOnce()
}

const logUser = withOnlyOnce(function (name,age){
  console.log(`Hi ${name} your are ${age} years old`)
})

for(let i=0;i<10; i++){
  logUser("John",30)
}