//hello object
let user={};
user.name = "John";
user.surname = "SMith";
user.name = "Peter";
delete user.name;

//check
function isEmpty(obj){
    for(let key in obj){
        return false;
    }
    return true;
}
//sum object prop
function sumOfSalaries(obj){
    let sum = 0 ;
    for(let name in obj){
        sum+=obj[name];
    }
    return sum;
}
//Multiply numeric property values by 2
function multiplyNumeric(obj){
    for(let key in obj){
        if(typeof(obj[key])=='number'){
            obj[key]*=2;
        }
    }
}