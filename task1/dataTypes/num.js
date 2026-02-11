//sum
let a = +prompt("The first number?", "");
let b = +prompt("The second number?", "");

alert( a + b );
//readNum
function ReadNumber(){
    let num;
    do{
        num = prompt("Enter a num : " , 0);
    }while(!isFinite(num));
    if(num==null || num=='') return null;
    return +num;
}
//random
function random(min , max){
    return min + Math.random()*(max-min);
}