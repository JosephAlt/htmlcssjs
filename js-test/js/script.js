// // var message ="in global";
// // console.log("global:mesage = " + message)

// // function a (){
// //     var message = "inside a";
// //     console.log("a: message = " + message);
// //     b();
// // }
// // function b (){
// //     console.log("b: message = " + message);
// // }
// // a();

// // //data types
// // var boolval=true;
// // var nullval=null;
// // var undefinedval;
// // var numval= 8;
// // var stringval= "noice";
// // console.log(boolval);
// // console.log(nullval);
// // console.log(undefinedval);
// // console.log(stringval);
// // console.log(numval);

// // //test
// // var test1;
// // test1=5;
// // if (test1==undefined){
// //     console.log("x is undefined");
// // }


// // else{
// //     console.log("x is defiend");
// // }

// // /////


// // var string="Hello";
// // string += " World";
// // console.log(string +"!");

// // ///math ops

// // //precedence of parnathesis

// // console.log((5/2)*5/2);
// // console.log(undefined/2);


// // function test11(a){
// //     console.log(a/5);
// // }
// // test11();
// // test11(6238756);

// // //equality

// // var x=4, y=4;
// // if (x == y) {
// //     console.log("equal without quotes")
// // }
// // y="4"//string
// // if (x==y){
// //     console.log(" equal even when one with quotes ");
// // }


// // //strict equality
// // console.log("strict equality");
// // if (x===y){
// //     console.log("sttict: x=4 is equal to y= string(4)")
// // }
// // else{
// //     console.log("strict: x=4 is not equal to y=(string)4")
// // }

// // if (false || null || "" || 0 || NaN ||undefined) {
// //     //this wont execute because js considers all the above as a false value
// //     console.log("this wont execute")
// // }
// // else{
// //     console.log("above given if statement regarding what js considers true did not work")
// // }


// // if (true && "noice" && "false" && 1 && -1){
// //     console.log("all conditions are ture so u see this")
// // }


// // //difference betweeen new line and the same line

// // function trialfunction1()
// // {
// //      return
// //      {
// //          name:"Jospeh"
// //      }
// // }

// // function trialfunction2(){
// //     return{
// //         name:"also Joseph"
// //     }
// // }
// // console.log(trialfunction1);
// // console.log(trialfunction2);

// // //for loop
// // var sum=0;
// // for (var i=0; i<10; i++){
// //     console.log(i);
// //     sum=sum+i;
// // }
// // console.log("the sum of the nuber sform 0 to 9 is" + sum);


// // for (i=0;i<5;i++){
// //     console.log("random line "+ i)
// // }

// // //fuction default value handling
// // function orderChickenWith(sidedish){
// //     // if (sidedish === undefined){
// //     //     sidedish="nothing";
// //     // }
// //     //insteed,
// //     sidedish=sidedish || "Nothing"
// //     console.log("Chicken with " + sidedish);
// // }

// // orderChickenWith("noodles");
// // orderChickenWith();

// // //assignment
// // // var x = 10;
// // // if ( (null) || (console.log("Hello")) || x > 5 ) {
// // //   console.log("Hello");
// // // }


// ///OBJECTS

// var company= new Object();
// company.name="facebook";
// console.log(company);
// console.log(company.name);
// company.ceo=new Object();
// company.ceo.firstname="Mark";
// console.log(company.ceo.firstname);

// console.log(company);
// company.ceo.favColor="blue";
// console.log("CEO " + company.ceo.firstname + "'s Favourite Color is " + company.ceo.favColor);

// console.log(company["ceo"]["firstname"]);

// company["stock price"] = 190;
// console.log(company);
// console.log(company["stock price"]);

//better way to create objects

// var facebook={
//     name:"Facebook",
//     ceo:{
//         firstName:"Mark",
//         favColor:"blue"
//     },
//     "stock of company":190
// };
// console.log(facebook);
// console.log(facebook["stock of company"]);

//FUNCTIONS

// function multiply(x,y){
//     return x*y;
// };

// multiply.version="v1.0.0";
// console.log(multiply.version);

// //trial functions
// var multiplierfunc=function(multiplier){
//     var myfunction =function(x) {
//         return multiplier*x 
//     }
//     return myfunction;
// };

// var multiplyby3= multiplierfunc(3);
// console.log(multiplyby3(10));
// console.log(multiplierfunc(3)(10000));

// //passing fucntoins as argunments

// function doOperationOn(x,operation){
//     return operation(x);
// };
// console.log(doOperationOn(3,multiplyby3))


// var a=90;
// var b=a;
// var a=95;
// console.log("a"+a);
// console.log("b"+ b);

// var aobj={
//     a:99
// }
// var bobj=aobj;
// bobj.a=100;
// console.log(aobj.a);
// console.log(bobj.a);


//passing by reference and value in fucntions

// function changePrimitive(primval){
//     console.log("change in primitive|||||");
//     console.log("before");
//     console.log(primval);

//     primval=5;
//     console.log("after");
//     console.log(primval);
// };

// console.log("BEFORE EXECUTION");
// var value=7;
// changePrimitive(value);
// console.log("AFTER FUNCTION EXECUTON");
// console.log("value variable after change in fucntoin");
// console.log(value);

// console.log("INIT");
// function changeObject(objVal){
//     console.log("Before Change IN fucntion");
//     console.log(objVal);
//     objVal.x=5;
//     console.log("After change IN fucntion");
//     console.log(objVal);
// }

// console.log("Before Calling function");
// var value={
//     x:7
// }
// changeObject(value);
// console.log("After calling Function")
// console.log(value);


//function constructos

// function Circle(radius){    //useing capitals for others to knoiw that it is a fucntion construction( generally);
//     // console.log(this);
//     this.radius= radius; //radius part of the fucntion argument

// };

// Circle.prototype.getArea= function(){
//     return( Math.PI * Math.pow(this.radius,2))
    
// };

// var myCircle = new Circle(10);  //New object named circle   
// console.log(myCircle.getArea());


// var otherCircle = new Circle(200);
// console.log(otherCircle.getArea());



//making my own fucntoin constructor  //test1

// function Cuboid(length,breadth,height){
//     // console.log(this);
//     this.length=length;
//     this.breadth=breadth;
//     this.height=height;

//     console.log(this.volume())
// };
// Cuboid.prototype.volume = function(){
//     return  this.length*this.breadth*this.height + " Cm^3"
// };

// cuboid1 =  new Cuboid(100,100,100);

// cuboid2 =  new Cuboid(10900,100,100);



//test 2 fucntions constructior
//to find whether a number is prime or not

function Number(integer){
    this.integer=integer;
    console.log(this.isprime());
}
Number.prototype.isprime =  function(){
    n=this.integer;
    for (t=0;t<n;t++){


    }
}