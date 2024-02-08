console.log("--------Objects-------");

let name = "Vlada";
let sex = "female";
let age = 21;

let person = {
  name,
  sex,
  age,
  set personName(name) {
    name = this.name;
  },
  get password() {
    return this.name + this.age;
  },
};

let firstName = "name";
person[firstName];

//Клонирование объекта
let admin = Object.defineProperties(
  {},
  Object.getOwnPropertyDescriptors(person)
);

console.log(person);
console.log(person.password);
console.log(Object.getOwnPropertyDescriptors(admin));
