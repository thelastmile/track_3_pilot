'use strict';

/*
It is sometimes said that to understand recursion, you must understand recursion. How frustrating!
I checked the dictionary and all it said was:

Recursion: see Recursion.

Next I tried Google. Sure enough, it responded with:

Did you mean: recursion?

So far we don't seem to be getting anywhere.
Yet these examples offer the core idea behind recursion:

--> Recursion occurs whenever a thing is defined in terms of itself.

PHP, for example, stands for "PHP Hyptertext Preprocessor." This is an example of a
recursive acronym. As another example, GNU stands for "GNU's not Unix."

A recursive function is a function that is defined in terms of itself. Here's a simple example:
*/

function length(s) {
  // base case: an empty string has length 0
  if (s === '') {
    return 0;
  }

  // recursive case: cut off the first character.
  // return the length of whatever is left, plus 1.
  return 1 + length(s.slice(1));
}

/*
A recursive sequence is, as you might imagine, a sequence that is defined in terms of itself.
The Fibonacci sequence is perhaps the most famous recursive sequence, introduced by
Leonardo of Pisa in 1202:

Fib(0) = 0
Fib(1) = 1
Fib(n) = Fib(n-1) + Fib(n-2)

This definition leads to a real sequence of numbers:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
*/

// here's a way to return the Nth fibonacci number using recursion:
function fibonacci(n) {
  // base cases: fib(0) is 0, fib(1) is 1.
  if (n <= 1) {
    return n;
  }
  // recursive case
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// 1.
// IMPLEMENT fibonacci without using recursion.
// Which version do you like better?
function fibonacciNonrecursive(n) {

}

/*
Recursive functions tend to consist of two parts:

-- base case(s): these are the stopping points of the recursive chain of function
invocations. For example, an empty string has length zero. Base cases are needed
to prevent a recursive process from running forever.

-- recursive case(s): these break the problem into smaller subproblems. In the fibonacci
example, Fib(n) is defined in terms of earlier sequence numbers -- Fib(n-1) and Fib(n-2).

As another example, here's one way to define exponentiation (In Javascript, this is the
Math.pow(a, n) function):

when n is zero,
a^n = 1

when n is even,
a^n = a^(n/2) * a^(n/2)

when n is odd,
a^n = a * a^(n-1)

Following this definition,

7^10 = (7^5) * (7^5)
     = (7 * (7^4)) * (7 * (7^4))
     = (7 * ((7^2) * (7^2))) * (7 * ((7^2) * (7^2)))
     = (7 * ((7 * 7) * (7 * 7)) * (7 * ((7 * 7) * (7 * 7))))
     = 282475249

Which, sure enough (try for yourself),

Math.pow(7, 10) = 282475249
*/

// 2.
// IMPLEMENT this idea as a recursive function.
function pow(a, n) {
  // assume n is an integer.
  // how many base cases do you have? how many recursive cases?
}

/*
READ the following code to understand a new concept: nested helper functions.

The square root of x is some number, y, such that y * y = x.
For example, the square root of x=9 is y=3, because 3*3 = 9.
The square root of 2 is about 1.4142, because 1.4142 * 1.4142 is about 2.

Math classes typically teach this definition and stop there,
showing you how to use your calculator to find square roots of numbers.

How does your calculator do it? Here is one common method, discovered by Heron
of Alexandria in the first century A.D., and later extended by Isaac Newton:

1. let guess = 1
2. if guess * guess isn't close enough to x,
3. let quotient = x/guess
4. guess = average(guess, quotient)
5. go back to step 2.

For example: for sqrt(2)
x = 2
let guess = 1

quotient = 2/1 = 2
guess = average(guess, quotient) = 1.5

close enough? 1.5 * 1.5 = 2.25. Not close enough.

quotient = 2/1.5 = 1.333333
guess = average(1.5, 1.33333) = 1.4167

close enough? 1.4167 * 1.4167 = 2.007..
close enough!
*/

function sqrt(x, tolerance=.001) {
  // non-recursive helper functions
  const average = (a, b) => (a + b) / 2
  const improve = (guess) => average(guess, x / guess)
  const isGoodEnough = (guess) => Math.abs(guess*guess - x) <= tolerance

  // a recursive helper function
  function sqrtHelper(guess) {
    if(isGoodEnough(guess, x)) {
      return guess; // base case
    } else {
      return sqrtHelper(improve(guess)); // recursive case
    }
  }

  // get it started
  return sqrtHelper(1.0);
}

// 3.
// REWRITE sqrt without using recursion.
// which version do you like better?
function sqrtNonrecursive(x, tolerance=.001) {

}

// 4.
// Write a recursive function that reverses an array, in-place.
// Meaning: no new arrays are created. Instead, the array passed
// to the function is mutated (modified) in-place.
//
// a = [1,2,3,4]
// reverse(a)
// console.log(a) -> [4,3,2,1]
function reverse(arr) {
  // structure your code using a recursive helper function
  function reverseHelper(start, end) {
    // this helper reverses the subarray of arr starting at index=start and
    // ending at index=end, inclusive.
    //
    // base case? recursive case?
  }
  // get it started
  reverseHelper(0, arr.length-1);
}


/*
Imagine an N x N grid of squares, where
* the upper left square is at x=0, y=0,
* the upper right square is at x=n-1, y=0
* the lower left square is at x=n-1, y=0,
* the lower right square is at x=n-1, y=n-1.

Write a function, spiral(n), that iterates through these squares
in a clockwise spiral pattern, starting at the upper left. For example,
for n=3, the following array is returned:

[
 [0,0], // x moves to the right
 [1,0],
 [2,0], // now y moves down
 [2,1],
 [2,2], // now x moves to the left
 [1,2],
 [0,2], // now y moves up
 [0,1],
 [1,1]  // spiral inwards to the center point
]
*/

// 5.
// IMPLEMENT spiral as a recursive function.
// what are your base case(s)?
// how do you break this into smaller subproblems?
function spiral(n) {

}

// 6.
// IMPLEMENT spiral without the aid of recursion.
function spiralNonrecursive(n) {

}

// UNCOMMENT your code when ready. Do both versions work?
// for ([x,y] of spiral(4)) {
//  console.log(`x=${x}, y=${y}`);
// }

/*
The Tower of Hanoi is a mathematical puzzle invented in 1883.
It's much easier to solve with recursive programming than by hand!

Here's the puzzle:

* There are n wooden disks, labeled 1 through n, where each disk is smaller
  than the last (disk 1 is the largest disk, disk n is the smallest.)

* There are three poles: left, middle, right. These disks all have holes in their centers,
  and they're stacked on the left pole, in order, with the largest disk sitting on the bottom.

* The goal of the puzzle is to move all the disks to the pole on the right. However, there are
  two rules:

** Disks can only be moved one at a time.
** Large disks can NEVER sit on top of small disks. For all choices of two disks a and b,
   at all times, if a is on top of b, then it must follow that a is smaller than b.

Here's an example game, for n === 3. Making a sketch on a piece of paper might help.

// all poles start out stacked on the left pole, with smallest on top.
[3, 'left', 'right']   // move the small disk from the left to the right pole.
[2, 'left', 'middle']  // move the medium disk from the left to the middle pole
[3, 'right', 'middle'] // move the small disk from the right to the middle pole.
[1, 'left', 'right']   // move the large disk from the left to the right pole
[3, 'middle', 'left']  // move the small disk from the right to the left pole
[2, 'middle', 'right'] // move the medium disk from the middle pole to the right pole
[3, 'left', 'right']   // move the small disk from the left pole to the right pole.
// now all poles are stacked on the right, with smallest on top.

This puzzle can be solved with only about a dozen lines of code. Consult wikipedia
if you get stuck.
*/

// 7.
// IMPLEMENT a Tower of Hanoi solver. It takes the number of disks, n, as input,
// and returns an array of triplets, where each triplet in the array represents a move.
//
// towersOfHanoi(2) should return:
//
// [
//   [2, 'left', 'middle'],
//   [1, 'left', 'right'],
//   [2, 'middle', 'right']
// ]
function towersOfHanoi(n) {
  // possibly helpful: Array.prototype.concat()
  // [1,2,3].concat([4,5]) -> [1,2,3,4,5]
}

// EXTRA CREDIT. Using an HTML5 canvas, or any other drawing method,
// create a visualization of your Towers of Hanoi solver. It should show
// each step of how the puzzle is solved. Each disk should be a different size,
// and optionally a different color, for clarity.


/*
For this last problem, use recursion if you like. It isn't required.

You have two coconuts. A building has N floors. At some floor B, the breaking point,
where 0 <= B < N, the coconuts will break when dropped. For all floors below B, the coconuts
can be dropped over and over again without breaking.

Your goal: figure out the exact breaking point in as few drops as possible. Your function
must return an integer representing the lowest floor that the coconuts break on.

willBreakAt is a function that takes one argument, a floor, and returns true if coconuts
break when dropped from that floor.
*/

function coconutsNaive(totalFloors, willBreakAt) {
  for (let n = 0; n < totalFloors; n++) {
    if (willBreakAt(n)) {
      return n;
    }
  }
}

// 8.
// IMPLEMENT a more resourceful solution.
function coconutsClever(totalFloors, willBreakAt) {

}

// CHANGE to your implementation when ready.
const coconuts = coconutsNaive;

// this testing code might help you debug your answer.
function makeTestingFunctions(totalFloors, breakingPoint) {
  let [numDrops, numBreaks] = [0, 0];
  const willBreakAt = (floor) => {
    const justBroke = floor >= breakingPoint;
    numDrops++;
    if (justBroke) {
      numBreaks++;
    }
    return justBroke;
  };
  const getDrops = () => numDrops;
  const getBreaks = () => numBreaks;
  return [willBreakAt, getDrops, getBreaks];
}

function runBenchmark() {
  const numCoconuts = 2;
  const totalFloors = 100;
  const allDrops = [];
  let fewestDrops = Infinity;
  let fewestDropsBreakingPoint = null;
  let mostDrops = -Infinity;
  let mostDropsBreakingPoint = null;
  const average = (nums) => {
    let sum = 0;
    for (let num of nums) {
      sum += num;
    }
    return sum / nums.length;
  };
  for (let breakingPoint = 0; breakingPoint < totalFloors; breakingPoint++) {
    const [willBreakAt, getDrops, getBreaks] = makeTestingFunctions(totalFloors, breakingPoint);
    const result = coconuts(totalFloors, willBreakAt);
    if (getBreaks() > numCoconuts) {
      console.log(`Error: more than ${numCoconuts} coconuts broke for breakingPoint=${breakingPoint}`);
    }
    if (result !== breakingPoint) {
      console.log(`Error: expected breakingPoint=${breakingPoint}, but result=${result}`);
    }
    const drops = getDrops();
    allDrops.push(drops);
    if (drops < fewestDrops) {
      fewestDrops = drops;
      fewestDropsBreakingPoint = breakingPoint;
    }
    if (drops > mostDrops) {
      mostDrops = drops;
      mostDropsBreakingPoint = breakingPoint;
    }
  }
  const averageBreakingPoint = average(allDrops);
  console.log(`
For ${totalFloors} total floors, your coconuts() implementation:
-- drops an average of ${averageBreakingPoint} times, given all possible breaking points from 0 to ${totalFloors - 1}.
-- drops ${mostDrops} time(s) in the worst case, at floor ${mostDropsBreakingPoint}.
-- drops ${fewestDrops} time(s) in the best case, at floor ${fewestDropsBreakingPoint}.
`);
}

runBenchmark();

/* 9.
LIST EXAMPLES of places in this assignment (either in my code or your code) that use
the following programming concepts:

Closure
Higher-order function
Tail recursion
Divide and conquer algorithm
Iteration
Mutable datastructure
Immutable datastructure
*/

// EXTRA CREDIT. Extend coconuts() and runBenchmark() to work with m coconuts instead of 2 coconuts.
// (in other words, add a parameter.)
// What's the best strategy you can come up with given 3 coconuts? 5 coconuts?

