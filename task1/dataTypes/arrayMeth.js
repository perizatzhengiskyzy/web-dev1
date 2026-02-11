// 1️⃣ Translate border-left-width to borderLeftWidth
function camelize(str) {
  return str
    .split('-')
    .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join('');
}

// 2️⃣ Filter range
function filterRange(arr, a, b) {
  return arr.filter(item => item >= a && item <= b);
}

// 3️⃣ Filter range "in place"
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

// 4️⃣ Sort in decreasing order
let arr1 = [5, 2, 1, -10, 8];
arr1.sort((a, b) => b - a);

// 5️⃣ Copy and sort array
function copySorted(arr) {
  return arr.slice().sort();
}

// 6️⃣ Create an extendable calculator
function Calculator() {
  this.methods = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b
  };

  this.calculate = function(str) {
    let [a, op, b] = str.split(' ');
    a = +a;
    b = +b;
    if (!this.methods[op] || isNaN(a) || isNaN(b)) return NaN;
    return this.methods[op](a, b);
  };

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}

// Map to names
let users = [
  { name: "John", age: 25 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 28 }
];
let names = users.map(user => user.name);

//  Map to objects
let users2 = [
  { name: "John", surname: "Smith", id: 1 },
  { name: "Pete", surname: "Hunt", id: 2 },
  { name: "Mary", surname: "Key", id: 3 }
];
let usersMapped = users2.map(user => ({ fullName: `${user.name} ${user.surname}`, id: user.id }));

// Sort users by age
function sortByAge(users) {
  users.sort((a, b) => a.age - b.age);
}

//  Shuffle an array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

//  Get average age
function getAverageAge(users) {
  return users.reduce((sum, user) => sum + user.age, 0) / users.length;
}

// Filter unique array members
function unique(arr) {
  return Array.from(new Set(arr));
}

//  Create keyed object from array
function groupById(arr) {
  return arr.reduce((obj, user) => {
    obj[user.id] = user;
    return obj;
  }, {});
}