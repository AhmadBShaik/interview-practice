class AsyncTaskQueue{
  constructor(concurrency){
    this.concurrency = concurrency
    this.running = 0
    this.taskList = []
  }

  queue(task){
    // return new Promise(() => {
      this.taskList.push(task)
      this.runNext()
    // })
  }
  
  runNext() {
    if(this.running >= this.concurrency || this.taskList.length === 0){
      return;
    }
    this.running++;
    const task = this.taskList.shift()
    task().then((result) => {
      console.log(result)
    }).catch((error)=> console.log(error)).finally(() => {
      this.running--;
      this.runNext();
    })
  }
}

const queue = new AsyncTaskQueue(2)
const task1 = () => new Promise((resolve)=> setTimeout(() => resolve("Resolved Task1"),5000))
const task2 = () => new Promise((resolve,reject)=> setTimeout(() => reject("Rejected Task2"),3000))
const task3 = () => new Promise((resolve)=> setTimeout(() => resolve("Resolved Task3"),5000))


// queue.queue(task1).then(val => console.log(val))
// queue.queue(task2).catch(err => console.log(err))
// queue.queue(task3).then(val => console.log(val))




queue.queue(task1)
queue.queue(task2)
queue.queue(task3)
