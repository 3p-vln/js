function factorial(x) {
  if (x === 0) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
}

const num = 5;

if (num > 0) {
  let result = factorial(num);
  console.log(`Факториал ${num} равен ${result}`);
}
