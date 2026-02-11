let i = 0;
while (i < 3) { 
  alert( i );
  i++;
}

let j = 3;
while(i) alert(j--);

for(let k=0; k<3; k++){
    alert(k);
}

alert(k);

let sum = 0;

while (true) {
    let value = +prompt("Enter a number", '');
    if (!value) break; 
    sum += value;
}

alert( 'Sum: ' + sum );