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

