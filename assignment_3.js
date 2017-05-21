
// 1.
// What is the worst-case run time of mystery(), using big-O notation? 
// (this is a JavaScript adaptation of problem 2-2 in Algorithm Design Manual, pg 57.)
function mystery(n) {
  let r = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      for (let k = 1; k < j; k++) {
        r++;
      }
    }
  }
  return r;
}

// 2. 
// What is the worst-case run time of deeperMystery(), using big-O notation?
const deeperMystery = (n) => {
  const keepOnHalving = (k) => {
    let count = 0;
    while (k > 1) {
      k /= 2;
      count++;
    }
    return count;
  };
  let r = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      for (let k = 0; k < j; k++) {
        r += keepOnHalving(i + j + k);
      }
    }
  }
  return r;
};

// 3.
// SHORT ANSWER
// On pg 58-59 of the Algorithm Design Manual, answer the following questions. 
// Please include brief EXPLANATIONS along with your answers -- proofs are not necessary.
// 2-7
// 2-8
// 2-9
// 2-12
// 2-18
// 2-19
// 2-21

// 4.
// The function below counts the number of different ways to arrange n different stones in a line (using all stones).
// For example, 3 stones {A,B,C} can be arranged in 6 ways: ABC, ACB, BAC, BCA, CAB, CBA. 
// Using asymptotic notation (big-O), what is the worst-case run time?
// What is my space complexity? 
function countPermutations(n) {
  if (n <= 1) {
    // there's only 1 way to arrange 1 stone. 
    // same for zero stones -- there's only 1 "empty arrangement".
    return 1;
  } 
  return n * countPermutations(n - 1);
}

// 5.
// Is countPermutations() tail recursive? If so, why? 
// If not, rewrite it below as a tail recursive function.

// 6.
// Here is an iterative version of countPermutations().
// Does it have the same time and space complexity as the recursive version? Why or why not? 
function countPermutationsIterative(n) {
  result = 1;
  while (n > 1) {
    result *= n;
    n--;
  }
  return result;
}

// 7.
// Instead of counting the number of permutations of n objects, 
// getPermutations() computes the actual permutations, as an array. 
// getPermutations([1,2,3]) returns [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]
// What is the worst-case space and time complexity of this code? (Using Big-O)
function getPermutations(arr) {
  if (arr.length === 0) {
    return [[]]; // an array of one permutation -- the empty arrangement. 
  }
  const result = [];
  const [first, ...rest] = arr;
  // recursive idea: determine the permutations of all the other elements after the first (the rest).
  // then for each of these permutations, insert the first element at every possible position. 
  for (let permutation of getPermutations(rest)) {
    for (let i = 0; i <= permutation.length; i++) { // note the <= vs. <
      const permutationCopy = permutation.slice();
      permutationCopy.splice(i, 0, first); // insert first at position i. (with 0 deletions.)
      result.push(permutationCopy);
    }
  }
  result.sort();
  return result;
}

// 8.
// EXTRA CREDIT
// What changes can you make to getPermutations() to improve the worst-case performance (time and/or space)?
// Wikipedia and The Algorithm Design Manual might have some helpful information on permutations.
// Even without these resources, there's some low-hanging fruit here...

// 9.
// Implement Binary Search. 
// input: 
// * arr, a sorted array of values. 
// * value, a value to search for.
//
// output: an index i of array such that arr[i] === value,
// or, -1 if no such value exists. 
//
// Consult Wikipedia to learn more about the binary search algorithm. 
function binarySearch(arr, value) {

}

// 10.
// Implement Insertion Sort. Consult Wikipedia or the Algorithm Design Manual to learn about this algorithm. 
// Wanted: a stable and in-place sort. 
function insertionSort(arr) {
  
}

// 11.
// Implement Merge Sort. 
// Wanted: stable, not in-place. 
function mergeSort(arr) {

}

// 12.
// Implement Quicksort. 
// Wanted: in-place. Stability doesn't matter. 
// EXTRA CREDIT: implement randomized quicksort. Why is this better than Quicksort with a fixed pivot? 
function quickSort(arr) {

}

