// Destructuring assignment
let user = {
  name: "John",
  years: 30
};

let { name, years: age, isAdmin = false } = user;

alert(name);    // John
alert(age);     // 30
alert(isAdmin); // false

// The maximal salary
function topSalary(salaries) {
  let maxName = null;
  let maxSalary = 0;

  for (let [name, salary] of Object.entries(salaries)) {
    if (salary > maxSalary) {
      maxSalary = salary;
      maxName = name;
    }
  }

  return maxName;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert(topSalary(salaries)); 