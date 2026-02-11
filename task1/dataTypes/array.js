// 
let fruits = ["Apples", "Pear", "Orange"];
let shoppingCart = fruits;
shoppingCart.push("Banana");
alert(fruits.length);
// Array operations
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");               
styles[Math.floor((styles.length - 1) / 2)] = "Classics"; 
let first = styles.shift();               
styles.unshift("Rap", "Reggae");          
console.log(styles);

// Calling in an array context
let arr = ["a", "b"];
arr.push(function() { alert(this); });
arr[2](); 

// Sum input numbers
function sumInput() {
  let numbers = [];
  while (true) {
    let value = prompt("Enter a number", 0);
    if (value === null || value === "" || !isFinite(value)) break;
    numbers.push(+value);
  }
  return numbers.reduce((sum, num) => sum + num, 0);
}

// A maximal subarray
function getMaxSubSum(arr) {
  let maxSum = 0, partialSum = 0;
  for (let item of arr) {
    partialSum += item;
    if (partialSum > maxSum) maxSum = partialSum;
    if (partialSum < 0) partialSum = 0;
  }
  return maxSum;
}