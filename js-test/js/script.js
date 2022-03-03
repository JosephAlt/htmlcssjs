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