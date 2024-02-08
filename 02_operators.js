console.log("---Operator ||---");
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false

let cat = "";
let dog = "";
let monkey = "";
console.log(cat || dog || monkey || "No pat"); //No pat
let no = false;
console.log(cat || dog || monkey || no); //false
console.log(cat || dog || no || monkey); //пустая строка

false || console.log("Text false"); //Text false
true || console.log("Text false"); //Ничего

console.log("\n\n---Operator ??---");
let ovner = "Vlada";
console.log(ovner ?? "No ovner"); //Vlada
let user;
console.log(user ?? "No user"); //No user

console.log("\n\n---Operator &&---");
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false

console.log(8 && 9);
let g = 8 && 9;
console.log(g);

cat = "Cat";
dog = "Dog";
monkey = "Monkey";
console.log(cat && dog && monkey && "No pat"); //No pat
console.log(cat && dog && monkey && no); //false
console.log(cat && dog && no && monkey); //false

console.log("\n\n---Operator !---");
console.log(!1);
console.log(!!1);

console.log("\n\n---if else---");
const num = 2;
if (2 > 5) {
  console.log(num > 5);
} else if (num == 5) {
  console.log(num == 5);
} else if (num === 5) {
  console.log(num === 5);
} else if (num < 5) {
  console.log(num < 5); //виведеться это ибо это условие верно
} else {
  console.log("Incorrect");
}

console.log("\n\n---Operator ?---");
let conditiomal =
  num > 5
    ? num > 5
    : num == 5
    ? num == 5
    : num === 5
    ? num === 5
    : num < 5
    ? num < 5
    : "Incorrect";
console.log(conditiomal);

console.log("\n\n---switch case---");
switch (num) {
  case 1:
    console.log("1 = " + num);
    break;
  case 2:
    console.log("2 = " + num);
    break;
  case 3:
    console.log("3 = " + num);
    break;
  default:
    console.log("Incorrect");
    break;
}
