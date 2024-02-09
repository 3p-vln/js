const users = [
  {
    id: 1,
    name: "Святослав",
    age: 25,
    email: "svyatoslav@example.com",
    city: "Київ",
  },
  {
    id: 2,
    name: "Влада",
    age: 32,
    email: "vlada@example.com",
    city: "Київ",
  },
  {
    id: 3,
    name: "Дима",
    age: 28,
    email: "dima@example.com",
    city: "Київ",
  },
  {
    id: 4,
    name: "Максим",
    age: 35,
    email: "maxim@example.com",
    city: "Харків",
  },
  {
    id: 5,
    name: "Влад",
    age: 29,
    email: "vlad@example.com",
    city: "Харків",
  },
  {
    id: 6,
    name: "Артём",
    age: 41,
    email: "artem@example.com",
    city: "Харків",
  },
  {
    id: 7,
    name: "Андрей",
    age: 36,
    email: "andrey@example.com",
    city: "Херсон",
  },
  {
    id: 8,
    name: "Денис",
    age: 45,
    email: "denis@example.com",
    city: "Херсон",
  },
  {
    id: 9,
    name: "Іван",
    age: 27,
    email: "ivan@example.com",
    city: "Херсон",
  },
  {
    id: 10,
    name: "Марія",
    age: 31,
    email: "maria@example.com",
    city: "Рівне",
  },
];

//FOREACH
console.log("-----forEach-----");
const secondArr = [];
const user = users.forEach((user, index) => {
  if (index % 2 != 0) {
    secondArr.push(user);
  }
});
console.log(secondArr);

//MAP
console.log("\n-----Map-----");
const newUser = secondArr.map((person, index) => {
  if (person.age <= 40) {
    person.city = "Sumy";
  }
  return person;
  //   return person.name;
});
console.log(newUser);

//FILTER
console.log("\n-----Filter-----");
const usersWithD = newUser.filter((person) =>
  person.name.toLowerCase().split("").includes("д")
);

console.log(usersWithD);

//REDUSE
console.log("\n-----Reduse-----");
let final = usersWithD.reduce((acum, item, index) => {
  if (item.name.toLowerCase().split("").includes("а")) {
    acum.push(item);
  }
  return acum;
}, []);
console.log(final);

//FOND
console.log("\n-----Find-----");
let checkFinal = usersWithD.find((person) =>
  person.email.toLowerCase().split("").includes("l")
);
console.log(checkFinal);

//FOND INDEX
console.log("\n-----Find Index-----");
let checkFinalIndex = usersWithD.findIndex((person) =>
  person.email.toLowerCase().split("").includes("l")
);
console.log(checkFinalIndex);

//TASK
console.log("\n\n-----Task example-----");
const userArrFirst = users
  .filter((item) => item.id % 2 != 0)
  .map((item) => {
    return {
      id: `${item.id}`,
      info: `${item.name} (${item.email})`,
      age: `${item.age}`,
    };
  })
  .reduce((acum, item, index) => {
    if (item.info.toLocaleLowerCase().split("").includes("v")) {
      acum.push(item);
    }
    return acum;
  }, []);

console.log(userArrFirst);

const citys = users.reduce((acum, item, indx) => {
  acum.push(item.city);
  return acum;
}, []);

const usersNew = users.reduce((acum, item, indx) => {
  let name = item.name.toLocaleLowerCase().split("");
  for (let i in name) {
    if (name[i] == "а") {
      let random = Math.round(Math.random(citys.length - 1) * 10);
      item.city = citys[random];
      acum.push(item);
    }
  }
  return acum;
}, []);
