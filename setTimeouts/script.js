console.log("Start")

setTimeout(() => {
  console.log("Timeout")
}, 5000)


console.log("End")

const startTime = new Date().getTime();
let endTime = startTime

// blocking the main thread
while(endTime < startTime+10000){
  endTime = new Date().getTime()
}

console.log("Program Ends")