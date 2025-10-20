/**
 * Refactor notes:
 * - Extracted duplicated summing logic into `sumArray`.
 * - Added `averageArray` which reuses `sumArray`.
 * - Replaced redundant loops with function calls and fixed an undefined variable bug.
 */

// Calculate totals from an array

const numbers = [10, 20, 30, 40];

// Returns the sum of numeric elements in an array
function sumArray(arr) {
  let total = 0;
  for (let n of arr) {
    total += n;
  }
  return total;
}

// Returns the average of numeric elements in an array. Returns NaN for empty arrays.
function averageArray(arr) {
  return sumArray(arr) / arr.length;
}

const total1 = sumArray(numbers);
console.log("Total 1:", total1);

const total2 = sumArray(numbers); // reused function instead of repeating the loop
console.log("Total 2:", total2);

// Calculate the average
const average = averageArray(numbers);
console.log("Average:", average);
