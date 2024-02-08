class Task {
  //клас родитель
  constructor(title = Task.getDefaultTitle(), isCompleted = false) {
    this.title = title;
    this._isCompleted = isCompleted;
    Task.counter += 1;
  }

  static getDefaultTitle() {
    return "Name";
  }

  complited() {
    this._isCompleted = true;
  }

  get isCompleted() {
    return this._isCompleted === true ? "done" : "not done";
  }
}

class SubTask extends Task {
  //дочерний клас
  constructor(title) {
    super(title); //Наследование свойства класа
  }

  complited() {
    super.complited(); //Наследование свойств метода
    console.log(`SubTask ${this.title} was complited`);
  }
}

Task.counter = 0; //статическое свойство

let task = new Task("Vlada", true);
let task2 = new SubTask("Dima", false);
let task3 = new Task();

task2.complited();

console.log(task);
console.log(task2);
