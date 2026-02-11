//Two functions – one object
let obj = {};
function A(){ return obj;}
function B(){return obj;}
alert(new A() == new B() );
//calculator
function Calculator(){
    this.read=function() {
        this.a= + prompt('a?' , 0);
        this.b=+prompt('b?',0);
    };
    this.sum()= function(){
        return this.a+this.b;
    };
    this.mul = function() {
    return this.a * this.b;
  };
}
//Accumulator
function Accumulator(startingValue){
    this.value = startingValue;
    this.read()=function(){
        this.value+= prompt('How much to add?' , 0);
    };
}