//-------Примитивные типы данных--------
//-------String
const str = "Vlada";
console.log(typeof str);

console.log(str.length); //длинна строки
console.log(str[3]); //обращение к символам
const up = str.toUpperCase();
console.log(up); //к верзнему регистру
const low = str.toLowerCase();
console.log(low); //к нижнему регистру
function reverseStr(str) {
  const word = str.split(""); //разбить слово нв масив
  const reverse = word.reverse(); //обернуть масив
  const finalWord = reverse.join(""); //масив привести к строке
  console.log(finalWord);
}
reverseStr(str);

//-------Литарал шаблона
const bool = true;
console.log(typeof bool);
console.log(typeof String(["fgfd", "dfdgfh", "sfdgfhg"]) + "\n\n");

//---------Number
const num = 30;
console.log(typeof num);
const numSec = 1 / 0;
console.log(typeof numSec);
const numNaN = "Vlada" * 3;
console.log(typeof numNaN);

//--------BigInt
const bigInt = 1234567891234567891472583369n;
console.log(typeof bigInt + "\n\n");

//--------Boolean
const boolean = 8 > 9;
console.log(boolean + " type " + typeof boolean + "\n\n");

//---------Undefined
let undef;
console.log(typeof undef);
console.log(typeof und + "\n\n");

//---------null
const nul = null;
console.log(typeof nul + "\n\n");

//---------Symbol
const symb = Symbol("Vlada");
console.log(typeof symb);
