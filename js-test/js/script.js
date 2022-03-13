var message ="in global";
console.log("global:mesage = " + message)

function a (){
    var message = "inside a";
    console.log("a: message = " + message);
    b();
}
function b (){
    console.log("b: message = " + message);
}
a();

//data types
var boolval=true;
var nullval=null;
var undefinedval;
var numval= 8;
var stringval= "noice";
console.log(boolval);
console.log(nullval);
console.log(undefinedval);
console.log(stringval);
console.log(numval);

//test
var test1;
test1=5;
if (test1==undefined){
    console.log("x is undefined");
}


else{
    console.log("x is defiend");
}

/////


var string="Hello";
string += " World";
console.log(string +"!");

///math ops

//precedence of parnathesis

console.log((5/2)*5/2);
console.log(undefined/2);


function test11(a){
    console.log(a/5);
}
test11();
test11(6238756);

//equality

var x=4, y=4;
if (x == y) {
    console.log("equal without quotes")
}
y="4"//string
if (x==y){
    console.log(" equal even when one with quotes ");
}


//strict equality
console.log("strict equality");
if (x===y){
    console.log("sttict: x=4 is equal to y= string(4)")
}
else{
    console.log("strict: x=4 is not equal to y=(string)4")
}