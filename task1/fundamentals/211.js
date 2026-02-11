alert( true || true );  
alert( false || true );

let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  alert( 'The office is closed.' ); // it is the weekend
}

let firstName = "";
let lastName = " ";
let nickName = "SuperCoder";

alert( firstName || lastName || nickName || "Anonymous");

alert( 1 && 0 );
alert( 1 && 5 );

if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );
