const s = Symbol("Vlada");
console.log(s.description);
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");
console.log(Symbol.keyFor(sym)); // name
console.log(Symbol.keyFor(sym2)); // id

let user = {
  name: "Вася",
};

let id = Symbol("id");

user[id] = 1;

console.log(user[id]);
