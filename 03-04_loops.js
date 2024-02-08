let num = 0;
console.log("---WHILE---");
while (num < 5) {
  console.log(num++);
}
console.log("\n");

console.log("---DO WHILE---");
do {
  console.log(num--);
} while (num);
console.log("\n");

console.log("---FOR---");
num = 5;
for (let i = 0; i <= num; i++) {
  console.log(i);
}
console.log("\n");

console.log("---breack, continue---");
for (let i = 5; i > 1; i--) {
  if (i == 2) {
    break;
  }
  console.log(i);
}
console.log("\n");
for (let i = 5; i > 1; i--) {
  if (i % 2 == 0) {
    continue;
  }
  console.log(i);
}
console.log("continue");
num = 15;
nextPrime: for (let i = 3; i <= num; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }
  console.log(i);
}
console.log("\n");

console.log("---FOR IN---");
const fruits = ["kiwi", "apple", "kiwi", "orange", "kiwi", "apple"];
const obj = {};

for (let i in fruits) {
  console.log(i, fruits[i]);
}
console.log("\n");

console.log("---FOR OF---");
for (let i of fruits) {
  if (!obj[i]) {
    obj[i] = 1;
  } else {
    obj[i]++;
  }
}
console.log(obj);
