/** Hypothesis => factorial(5) => 5! => 5 * 4!
 * factorial(4) => 4!
 */
function factorial(n) {
  if (n <= 0) return 1; // Base condition
  return n * factorial(n - 1); // Induction
}

console.log(factorial(5));
