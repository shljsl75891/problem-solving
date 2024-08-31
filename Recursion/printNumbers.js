/**
 * This function prints numbers from 1 to N
 * @param {number} n - from 1 to this number
 * @returns {void} nothing
 */
function print1ToN(n) {
  if (n < 1) return; // Base condition
  print1ToN(n - 1); // Hypothesis
  console.log(n); // Induction
}

/**
 * This function prints numbers from N to 1
 * @param {number} n - from this number to 1
 * @returns {void} nothing
 */
function printNTo1(n) {
  if (n < 1) return; // Base condition
  console.log(n); // Hypothesis
  printNTo1(n - 1); // Induction
}

print1ToN(-1);
print1ToN(0);
print1ToN(10);
printNTo1(10);
