const testingTeam = {
  lead: "Amanda",
  tester: "Bill",
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.tester;
  }
}

const engineeringTeam = {
  testingTeam,
  lead: "Jill",
  engineer: "Dave",
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.engineer;
    yield* this.testingTeam;
  }
}

const employees = []
for (let emp of engineeringTeam) {
  employees.push(emp);
}
console.log(employees);


// practicle application is iterating through Tree data structure recursively
class Comment{
  constructor(content, children){
    this.content = content;
    this.children = children;
  }

  *[Symbol.iterator](){
    yield this.content;
    for (let child of this.children){
      yield* child;
    }
  }
}

const children = [
  new Comment("Hi", []),
  new Comment("Hello", []),
  new Comment("How are you?", [new Comment("I am fine.", [])])
]

const tree = new Comment("Great Post!", children);

const comments = [];
for (let value of tree){
  comments.push(value);
}
console.log(comments);