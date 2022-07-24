var memo = [];
function fibonacci(n) {
  if (memo[n]) {
    return memo[n];
  }
  else if (n < 2) {
    return 1;
  } else {
    return fibonacci(n - 2) + fibonacci(n - 1);
  }
}

console.log(fibonacci(10));