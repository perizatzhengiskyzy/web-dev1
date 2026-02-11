let fruits = ["Apple", "Orange", "Plum"];

alert( fruits[0] ); 
alert( fruits[1] ); 
alert( fruits[2] );


let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];

alert( arr[1].name ); // John

arr[3]();

let fruit = ["Apple", "Orange"];

fruits.push("Pear");

alert( fruits );

arr.forEach(function(item, index, array) {
  // ... do something with an item
})

let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

let user = users.find(item => item.id == 1);

alert(user.name); 