function q1() {
  console.log('A')
  setTimeout(() => console.log('B'), 0)
  Promise.resolve().then(() => console.log('C'))
  console.log('D')

}

/*
// Output
A
D
C
B
*/
function q2() {
  setTimeout(() => {
    console.log('A');
  }, 0);
  console.log('B');
  setTimeout(() => {
    console.log('C');
  }, 0);
}

/*
// Output
B
A
C
*/

function q3() {
  console.log('Start');
  Promise.resolve('Success').then(console.log);
  console.log('End');
}

/*
// Output
Start
End
Success
*/

function q4() {

  Promise.resolve().then(() => {
    console.log('P1');
    Promise.resolve().then(() => console.log('P2'));
  });
  console.log('End');
}

/*
// Output
End
P1
P2
*/

function q5() {

  console.log('1');
  setTimeout(() => console.log('2'), 0);
  new Promise((resolve) => {
    console.log('3');     //---> starts with new keyword, it's a constructor and it runs immediately without any delay
    resolve();
  }).then(() => console.log('4'));
  console.log('5');
}

/*
// Output  --- INCORRECT
1
5
3
4
2
*/

/*
// Output --- CORRECT
1
3
5
4
2
*/

function q6() {

  setTimeout(() => console.log('Timeout'), 0);
  Promise.resolve().then(() => {
    console.log('Promise 1');
  }).then(() => {
    console.log('Promise 2');
  });
}


/*
// Output
Promise 1
Promise 2
Timeout
*/

function q7() {

  async function first() {
    console.log('A');  //--> no waiting here
    await second(); // --> wait starts here and moved to micro task queue
    console.log('B'); 
  }
  async function second() {
    console.log('C'); //--> no waiting here
  }
  first();
  console.log('D');
}

/*
// Output  --- INCORRECT
D
A
C
B
*/


/*
// Output --- CORRECT
A
C
D
B
*/

function q8() {

  async function foo() {
    console.log(1);
    await Promise.resolve(); // --> wait starts here, schedules as microtask 1 
    console.log(2);
  }
  foo();
  Promise.resolve().then(() => console.log(3)); // --> wait starts here, shedules as microtask 2
}


/*
// Output -- INCORRECT
1
3
2
*/
/*
// Output -- CORRECT
1
2
3
*/

function q9() {

  setTimeout(() => console.log('T1'), 10);
  setTimeout(() => console.log('T2'), 0);
  console.log('Done');
}

/*
// Output
Done
T2
T1
*/

function q10() {

  console.log('Start');
  setTimeout(() => console.log('Timeout'), 0);
  Promise.resolve().then(() => {
    console.log('Promise');
    setTimeout(() => console.log('Nested Timeout'), 0);
  });
  console.log('End');
}


/*
// Output
Start
End
Promise
Timeout
Nested Timeout
*/

function q11(){
  setTimeout(() => console.log('Timeout'), 0); //Macro Task
  
  Promise.resolve().then(() => { // M T 1
    console.log('P1'); 
    Promise.resolve().then(() => console.log('P2')); // M T 3
  });
  
  Promise.resolve().then(() => console.log('P3')); // M T 2

}


/*
// Output -- INCORRECT
P1
P2
P3
Timeout
*/
/*
// Output -- CORRECT
P1
P3
P2
Timeout
*/


function q12(){

  console.log('Start');
  
  Promise.resolve()
    .then(() => {
      throw new Error('Fail');
    })
    .catch(() => console.log('Caught'))
    .then(() => console.log('Finally'));
  
  setTimeout(() => console.log('Timeout'), 0);
  console.log('End');
}

/*
// Output
Start
End
Caught
Finally
Timeout
*/

function q13(){
  async function a() {
    console.log('a1');
    await b(); // wait starts here, micro task 1
    console.log('a2'); 
  }
  
  async function b() {
    console.log('b1');
  }
  
  a();
  
  new Promise((res) => {
    console.log('p1'); // constructor, immediately runs this line
    res();
  }).then(() => console.log('p2')); // micro task 2
}


/*
// Output
a1
b1
p1
a2
p2
*/


function q14(){

  async function complex() {
    console.log(1);
    await 2;
    console.log(3);
    await 4;
    console.log(5);
  }
  
  complex();
  console.log(6);
}


/*
// Output
1
6
3
5
*/


function q15(){
  setTimeout(() => console.log('A'), 1);
  setTimeout(() => console.log('B'), 0);
}
/*
// Output
B
A
*/


function q16(){
  console.log('1');
  
  async function test() {
    console.log('2');
    return '3';
  }
  
  test().then(console.log); // m t 1
  
  new Promise((resolve) => {
    console.log('4');
    resolve('5');
  }).then(console.log);
  
  console.log('6');
}


/*
// Output
1
2
4
6
3
5
*/


function q17(){
  let i = 0;
  function run() {
    if (i < 2) {
      Promise.resolve().then(() => {
        console.log('P' + i);
        i++;
        run();
      });
    }
  }
  
  run();
  setTimeout(() => console.log('Timeout'), 0);
}
/*
// Output -- INCORRECT
P0
P1
P2
Timeout
*/

/*
// Output -- CORRECT
P0
P1
Timeout
*/

function q18(){

  async function one() {
    console.log('one');
    await null;
    console.log('one-delayed');
  }
  
  async function two() {
    console.log('two');
    await null;
    console.log('two-delayed');
  }
  
  one();
  two();
}

/*
// Output
one
two
one-delayed
two-delayed
*/

function q19(){

  async function task() {
    return Promise.resolve('Result');
  }
  // task().then -> M T 1
  task().then(res => console.log(res)); // M T 3
  Promise.resolve().then(() => console.log('Tick')); // M T 2
}

/*
// Output -- INCORRECT
Result
Tick
*/

/*
// Output -- CORRECT
Tick
Result
*/


function q20(){

  console.log('Start'); // 1
  
  setTimeout(() => { // Macro Task 1
    console.log('T1'); // 4
    Promise.resolve().then(() => console.log('P1')); // micro task 2 // 5
  }, 0);
  
  Promise.resolve().then(() => { // micro task 1
    console.log('P2'); // 3
    setTimeout(() => console.log('T2'), 0); // Macro Task 2
  });
  
  console.log('End'); // 2 
}

/*
// Output -- INCORRECT
Start
End
P2
P1
T1
T2
*/

/*
// Output -- CORRECT
Start
End
P2
T1
P1
T2
*/
