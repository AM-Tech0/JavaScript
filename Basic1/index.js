console.log(`Hello World! Lets Start JavaScript!`);
// console.log(`This is my first JavaScript code!`);
// let a=10;
// console.log(a);
// Javascript is a dynamic language,
// Let is block scoped and var is function scoped.
// var b=10;
// if (b===10){
// let num=10;
// console.log(num);}
// console.log(b); // This will work because b is declared with var and is function scoped.
// console.log(num); // This will give an error because num is block scoped and cannot be accessed outside the if block.
// Dyamaic typing
// let Name="Aman";
// console.log(Name);
// Name=30;
// console.log (Name);
// object
// let person={
// First:"Aman",
// Last:"Mehta",
// age:20 
// };
// console.log(person);
// console.log(person.age);
// If Statement
let age=18;
// if (age>=18){
// console.log("You can vote.")};
// If else Statement
// if (age>=18){
// console.log("You can Vote.")}
// else {
// console.log("You cannot vote.")};
// switch statement
// switch(true){
//          case age<=10:console.log("You are a baby.");
// break;
//          case age>10 && age<18:console.log("You are a teenager.")
// break;
//          case age>=18 && age<40:console.log("You are an adult.")
// break;
//          default:console.log("You are a senior citizen.");}
// loops
// for (let i=0; i<5; i++){
// console.log(i);}
// while loop
//  let i=0;
// while (i<5){
// console.log(i);
// i++;}
// Do while loop
// let i=0
// do{
// console.log(i);
// i++;}while(i<=5);
// for in loop
let person={
Name:"Aman",
Age:20,
City:"patna",
};
for (let  i in person){
console.log(i,":",person[i]);}
// for of loop
// let arr=[1,2,3,4,5];
// for(let key of arr){
// console.log(key);}

for (let key of Object.keys(person)){
console.log(key,":",person[key])}