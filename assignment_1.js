'use strict';

/*
Welcome to Track 3!

The goals for this first assignment are to:
* Work with time in javascript:
*   console.time, console.timeEnd, setInterval, setTimeout, (new Date()).getTime()
* Understand synchronous vs asynchronous code: callbacks vs return statements.
* Practice mathematical thinking: Monte Carlo estimation with Math.random()

Reading assignments for the week:

Read: ES2015 handout. You can use ES2015 in all assignments.

Read: JavaScript, The Good Parts. It's short; read the whole thing!
      Some of the trickiest content involves prototypal inheritance.
      While you won't often be writing prototype code directly, it's important
      to understand the concepts. So don't worry too much about the many details;
      try to focus on the big ideas.

Review: enough git that you know how to:
  * git push
  * git pull
  * git log
  * git add
  * git commit
  * git checkout
  * git reset
  * git branch

Each day as you're reading, please write down:
* questions that you have / parts of the reading that are unclear.
* the topics that are most confusing

You'll have time to ask the instructor questions one-on-one,
as well as group discussion time.
*/

// 1.
// WRITE a function that writes "hello world" to the console every m milliseconds, forever.
function infiniteHello(m) {
  // possibly useful:
  // * setInterval()
}

//
// Uncomment the line below when you are ready,
// then see if your code works. open a terminal and run:
// $ node assignment_1.js
//
// UNCOMMENT THIS LINE FOR TESTING:
// infiniteHello(1000);
//
// Next try:
// infiniteHello(100);

// 2.
// WRITE a function that writes "hello world" to the console every second, for n seconds.
function finiteHello(n) {
  // possibly useful:
  // * setInterval()
  // * clearInterval()
  // * console.log()
}

// Does it work?
// UNCOMMENT THIS LINE FOR TESTING:
// finiteHello(4);

// 3.
// WRITE a function that calls a callback every second. The callback takes one argument:
// how many seconds the function has been running. If the callback returns true, the function
// should stop running.
function runningFor(callback) {
  // possibly useful
  // * setInterval
  // * clearInterval
}

// 4.
// UNCOMMENT THESE LINES WHEN YOU ARE READY. make sure they work.
/*
runningFor((seconds) => {
  console.log(`Running for ${seconds} seconds`);
  if (seconds >= 2) {
    return true;
  }
});
*/

// 5.
// WRITE a function that accurately estimates Pi to at least 3 decimal places.
// it shouldn't take very long to run.
function roughlyEstimatePi() {
  // possibly useful:
  // * Math.random()
  // * Math.sqrt()
  //
  // you may not use Math.PI -- it's what you're trying to estimate!
}

// 6.
// UNCOMMENT for testing, when you're ready.
/*
console.time('rough estimate');
let estimate = roughlyEstimatePi();
console.timeEnd('rough estimate');
// you shouldn't be off by more than .001!
console.log(`Estimate: ${estimate}\nActual:   ${actual}\nOff by:   ${Math.abs(estimate - actual)}`);
*/

/* 7.
SHORT ANSWER (write your answer as a comment)
What's the fastest you can estimate PI to 3 decimal places?
Does it take 10 milliseconds? a minute?
Make it as fast as you can -- accuracy past 3 decimal places doesn't matter for this question.
*/

// 8.
// WRITE a function that estimates Pi given a certain amount of time.
// it takes one optional arguement:
//
// -- estimationTime. The maximum amount of time this function can take to estimate, in milliseconds
//    default if none given: 1 second
function estimatePi(estimationTime=1000) {
  // you cannot use Math.PI in this function -- that's what you're trying to estimate!
  //
  // possibly useful:
  // * Math.random()
  // * (new Date()).getTime()?
  // * setTimeout()?
}


/* 9.
Manually, from the console, double-check that estimatePi completes in the specified estimationTime
COPY AND PASTE BELOW some console output showing how you did this.
*/

/* 10.
How accurate is your estimate? WRITE another function that takes
an estimate and a real value, and returns the order of magnitude of the difference.
Examples:

findPrecision(4900, 5000) -> difference is 100 -> answer is 2 (estimate is off 2 orders of mag)
findPrecision(4990, 5000) -> difference is 10 -> answer is 1 (off by 1 order of magnitude)
findPrecision(4999, 5000) -> difference is 1 -> answer is 0 (off by 0 orders of magnitude)
findPrecision(4999.99, 5000) -> difference is .01 -> answer is -2
findPrecision(5000, 4999.99) -> same difference -> answer is -2
findPrecision(5000, 0) -> difference is 5000 -> answer is 4 (off by about four orders of magnitude)

findPrecision(3.14159, 3.141592653589793) -> answer is -5 (accurate to about 5 decimal places)
findPrecision(3.14, 3.141592653589793) -> answer is -2 (accurate to about 2 decimal places)
findPrecision(3000.14, 3.141592653589793) -> answer is 3 (estimate is off by 3 orders of magnitude)
*/

function findPrecision(estimate, real) {
  // there are at least two ways to do this.
  // one uses loops.
  // the other uses Math.log10.
  // (optional) figure out both ways.
}

// 11.
// UNCOMMENT THESE LINES WHEN YOU ARE READY. make sure they run without errors.
/*
const timings = new Map([
  ['100 milliseconds', 100],
  ['1 second', 1000],
  ['10 seconds', 10 * 1000],
  ['1 minute', 60 * 1000],
  ['10 minutes', 60 * 1000],
]);

timings.forEach((estimation_time, label) => {

  console.log(`Running for: ${label}...`);
  if (estimation_time > 60 * 1000) {
    console.log('(grab a snickers)');
  }
  const estimate = estimatePi(estimation_time)

  const difference = Math.abs(estimate - Math.PI);
  const precision = findPrecision(estimate, Math.PI);
  console.log(`
Estimate:   ${estimate}
Real:       ${Math.PI}
Difference: ${difference}
Precision:  ${precision} orders of magnitude off
`);
});
*/

/* 12.
SHORT ANSWER (as code comments)
Using what you've built, about how closely can you approximate Pi in:
100ms?
1 second?
10 seconds?
1 minute?
10 minutes?
*/


// The following function looks like it counts how
// many loop iterations it can perform within loopTime milliseconds.
//
// What happens when you try running it?
// Why doesn't this approach work?
// To come up with an answer, do some research with the JavaScript
// resources you have available.
function howManyLoops(loopTime=1000) {

  let loopCount = 0;
  let timeRemaining = true;

  setTimeout(
    () => timeRemaining = false,
    loopTime
  );

  while(timeRemaining) {
    loopCount += 1;
  }

  return loopCount;
}

// for example: how many loops in 10 milliseconds?
// howManyLoops(10);


/* EXTRA CREDIT
Quoted from Wikipedia:
"
In mathematics, the nth taxicab number, denoted Ta(n) or Taxicab(n), is defined as the smallest
number that can be expressed as a sum of two cubed positive integers in n distinct ways.
"

The lowest number that can be written in one way, Taxicab(1), is 2:

Taxicab(1) = 2
           = 1^3 + 1^3

The most well-known taxicab number, made famous by Srinivasa Ramanujan in a conversation
with G. H. Hardy in 1919, is Taxicab(2) = 1729. As the story goes, as told by Hardy:

"
I remember once going to see him when he was ill at Putney. I had ridden in taxi cab number 1729
and remarked that the number seemed to me rather a dull one, and that I hoped it was not an
unfavorable omen. "No," he replied, "it is a very interesting number; it is the smallest number
expressible as the sum of two cubes in two different ways!
"

Taxicab(2) = 1729
           = 1^3 + 12^3
           = 9^3 + 10^3

It can be shown that Taxicab(3), the smallest integer that can be written three ways, is 87539319.

Taxicab(3) = 87539319
           = 167^3 + 436^3
           = 228^3 + 423^3
           = 255^3 + 414^3

Write a function that prints Taxicab(n) as well as the n different sums.
What's the highest taxicab number you can find?

Use console.time -- How long does it take to calculate Taxicab(n) for each n?
*/

function taxicabNumber(n) {
  // Without the help of the right datastructure, your code will either require too
  // much time, memory, or both.
  //
  // Which datastructure(s) should you use? Investigate: Array, Set, Map.
  //
  // After trying on your own, has anyone posted about this problem on Stack Overflow?
  //
  // To see how much memory and CPU resources you're consuming, open up:
  // * 'Activity Monitor' on Mac OS X, or
  // * 'top' or 'htop' from the terminal on Ubuntu / OS X, or
  // * 'Resource Monitor' on Windows 10.
}

