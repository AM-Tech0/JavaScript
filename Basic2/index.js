console.log(`Hello World! Lets Start JavaScript! 
Basic2`);
//Creating object
// let person={
//   name: "Aman",
//    age: 22,
// city:"Bihar",
// files:function(){
// console.log("Profile")} }
// console.log(person);
// Factory function
// function per(length,breadth){
// return rect= (
// {len:length,
// br:breadth,
// kaam:function(){
// console.log("Area is: "+(length*breadth))
// }}
// )}
// let rect1=per(5,6);
// rect1.kaam();
// function area(radius){
// return{
// r:radius,
// draw(){console.log("Area is :"+(radius*radius*3.14))}}}
// let circle=area(8);
// circle.draw();
// let cir=area(10);
// cir.draw();
// let circl=area(11);
// circl.draw();
// constructor function -> Pascal case
// it intialise ana defining the function
function Area(len,br){
this.lenght=len;
this.breadth=br,
this.draw=function() {console.log("Area is: "+(len*br))}}
let rect2=new Area(5,6);
rect2.draw();
// this keyword is used to refer to the current object
// new keyword is used to create a new object and it also creates an empty object and then it calls the constructor function and it also sets the this keyword to the new object and it also returns the new object.
// rect2.weight=14;
// console.log(rect2);
// delete rect2.weight;
// console.log(rect2);
// Primitive types are copied the values wheres reference types are copied the addresss of the objects.
// let a=10;
// let b=a;
// a++;
// console.log(a);
// console.log (b);

// let c=10;
// function inc(c){
// c++;};
// inc(a);
// console.log(c);


// let x={value :30};
// let y=x;
// x.value++;
// console.log(x.value);
// console.log(y.value);
// let u={value:40};
// function inc1(u){
// u.value++;
// };
// inc1(u)
// console.log(u.value);

// Cloning of objects
//  1. Through Iterating 
// let obj1={
// a:10, b:20, c:30};
// let obj2={};
// for (let i in obj1){
// obj2[i]=obj1[i];
// }
// console.log(obj2);

// 2. Through Object.assign
let obj={
a:10, b:20, c:30};
let obj1={};
obj1=Object.assign({},obj);
console.log(obj1);

// 3. Through Spread operator
let pass={a:10, b:20, c:30};
letpass1={};
pass1={...pass};
console.log(pass1); 