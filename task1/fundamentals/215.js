function showMessage() {
  let message = "Hello, I'm JavaScript!"; 

  alert( message );
}

showMessage(); 

alert( message );

let userName = 'John';

function showMessage() {
  let message = 'Hello, ' + userName;
  alert(message);
}

showMessage(); 

function showMessage(from, text = "no text given") {
  alert( from + ": " + text );
}

showMessage("Ann");

function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {

    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert( i ); 
  }
}

