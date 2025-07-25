//function is a blockk of code designed to perform a particular tesk
//function functionName(){};

function greet(){
    console.log("hello,my name is Pooja");
    console.log("I am learning javascript functions.")
}

//function call
greet();

//function with parameter
function greetWithName(name){
    console.log("hello,my name is "+ name);
}

greetWithName("Pooja");

//function with multiple parameters
function greetWithFullName(firstName , lastName){
    console.log("hello,my full name is "+ firstName + " "+lastName);
    console.log(`hello,my full name is ${firstName} ${lastName}`);
}
greetWithFullName("Pooja","saini");

//function with return values

//add two numbers
function addNumbers(a,b){
    return a+b;
}
let addresult=addNumbers(10,20);
console.log("the sum is "+ addresult);

//subtract two numbers
function subNumbers(a,b){
    return a-b;
}
let subresult=subNumbers(20,10);
console.log("the sum is "+ subresult);
