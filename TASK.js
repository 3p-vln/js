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

//1
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

//----------------------------//
//2
function find(a, item) {
  let start = 0;
  let end = a.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (a[mid] === item) {
      return mid;
    } else if (a[mid] < item) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

const a = [1, 11, 21, 31, 41, 51];
console.log("Test", "Result", "Expected");
console.log("Test01", find(a, 1), 0);
console.log("Test02", find(a, 11), 1);
console.log("Test03", find(a, 21), 2);
console.log("Test04", find(a, 31), 3);
console.log("Test05", find(a, 41), 4);
console.log("Test06", find(a, 51), 5);
console.log("Test07", find(a, 0), -1);
console.log("Test08", find(a, 100), -1);
console.log("Test09", find(a, 22), -1);
console.log("Test10", find(a, 32), -1);

//----------------------------//
//3
const double = users.reduce((acc, curr, index) => {
  if (index % 2 === 1) {
    acc.push(curr, curr);
  }
  return acc;
}, []);

const unicDouble = [...new Set(double)];

const usersNew1 = unicDouble
  .reduce(
    (accum, item, index) => {
      if (index % 2 === 1) {
        accum[0].push(item);
      } else {
        accum[1].push(item);
      }
      return accum;
    },
    [[], []]
  )
  .reduce((accum, item, index, arr) => {
    if (arr[index - 1] && arr[index].length > arr[index - 1].length) {
      for (let i in arr[index - 1]) {
        accum.push(arr[index - 1][i]);
      }
    } else if (arr[index - 1] && arr[index].length < arr[index - 1].length) {
      for (let i in arr[index]) {
        accum.push(arr[index][i]);
      }
    }
    return accum;
  }, []);

const rand = Math.floor(Math.random() * usersNew1.length);

console.log(usersNew1[rand]);
