console.log("Basic3 JavaScript");
// // Math.random() generates a random number between 0 (inclusive) and 1 (exclusive).
// console.log(Math.random());
// // Math.PI is a constant that represents the ratio of the circumference of a circle to its diameter, which is approximately 3.14159.
// console.log(Math.PI);
// // Math.round() rounds a number to the nearest integer.
// console.log(Math.round(4.5));
// // Math.min() returns the samllest of zero or more numbers.
// console.log(Math.min(1,2,3,4,5));
// // Math.max() returns the largest of zero or more numbers.
// console.log(Math.max(1,2,3,4,5));
// // math.abs() returns the absolute value of a number.
// console.log(Math.abs(-5));
// let lastName="Mehta";
// let firstName=new String("Aman");
// console.log(lastName);
// console.log(firstName);
// console.log(typeof lastName); // string
// console.log(typeof firstName); // object
// let s1="Hello";
// let s2="World";
// console.log(s1,s2);
// console.log(typeof(lastName.split("h")));
// console.log(lastName.length);


// // Date object
// // normal date functions
// console.log(new Date());
// console.log(new Date().getFullYear());
// console.log(new Date().getDay());
// console.log(new Date().getMonth());
// // toLocale string
// let  obj={
//     weekday:"long",
//     year:"numeric",
// month:"short",
// day:"numeric",}
// console.log(new Date().toLocaleString("en-IN",obj))
// console.log(new Date().toLocaleDateString(("en-IN")));  //dateString
// console.log(new Date().toJSON(("en-IN"),obj));   //Json 
// // to format date
// console.log(new Intl.DateTimeFormat("en-IN").format(new Date()));

// Array 
//  let arr=[1,2,3,4,5];
//  console.log(arr); 
// console.log(typeof(arr));  //literal array
// let a= new Array(1,2,3,4);
//  console.log(a);
// console.log(typeof(a));  //object array
// modifying array
// arr[1]=90;
    //  console.log(arr);
// adding element in array
// console.log("Adding element in array");
//     arr.push(9);
//     console.log(arr);
//     arr.unshift(0);
//     console.log(arr);
//     arr.splice(2,0,100);
//     console.log(arr);
// removing element from array
// console.log("Removing element from array");
//      arr.pop(9);
//     console.log(arr);
//     arr.shift(0);
//     console.log(arr);
//     arr.splice(2,2,80);
//     console.log(arr);
// Searching element in array
// console.log("Searching element in array");
// console.log(arr.indexOf(3));

// if (arr.indexOf(3)!=-1)
// {    console.log("Element found");
// }
// console.log(arr.includes(3));
// array object to find through callback function
// let person=[{name:"Aman",age:22},{name:"Ankit",age:23}];

// let found=person.find(function(per){
//     return per.name==="Aman";})

// console.log(found);
// Callback function
// function myself(name,callback){
//     callback();
// console.log("My name is:",name);}
// function hello(){
// console.log("Good Morning!");}

// myself("Aman", hello);
// 2. example of callback function
// function result(a,b,callback){
// // return callback(a,b);
// console.log(callback(a,b));}
// function add(a,b){
// return a+b;}
// function mul(a,b){
// return a*b;}

// console.log(result(5,10,add));
// console.log(result(5,10,mul));
// result(5,4,add);
// result(5,4,mul);

// Arrow Function


// Removing Array
//  let marks=[34,56,78,90,12];
// console.log(marks);
// 1. method
//  console.log(marks=[]);
// 2. method
// marks.length=0;
// console.log(marks);
// 3. method
// console.log(marks.splice(0,marks.length))
// 4. method
// while(marks.length!=0){
//     marks.pop();}
// console.log(marks);
// combining array
//     let arr1=[1,2,3];
// let arr2=[4,5,6];
// let arr3=arr1.concat(arr2);
// console.log(arr3);
// console.log(arr1.concat(arr2));
// slicing array
    // console.log(arr3.slice(2,5));
// spread operator
//   console.log(...arr3);
// const usr1={
//    name:"Aman",
//     age:22};

// const usr2={
//     city:"Delhi",
//     country:"India"};

// const usr3={ ...usr1, ...usr2};
// console.log(usr3);
// const usr1 = {
//     name: 'Jen',
//     age: 22,
// };

// const usr2 = {
//     name: "Andrew",
//     location: "Philadelphia"
// };

// const mergedUsers = { ...usr1, ...usr2 };
// console.log(mergedUsers);
// console.log({...usr1,...usr2});
// iterating array
// 1 method
// for (let key of arr1){
//     console.log(key);}
// // 2. method
//     arr2.forEach(function(item){
// console.log(item);})
// splitting array
// let str1="My name is Aman";
// // console.log(str1.split(" "));
// let str2=str1.split(" ");
// console.log(str2);
// joining array

//  console.log(str2.join("-"));

// sorting array 
// let arr=[5,2,9,1,5,6];
// // 1. method
// function compare(a,b){
// return a-b;
// }
// console.log(arr.sort(compare));
// // 2. method
// let ar=[4,5,67,61,8,9,76,3];
// console.log(ar.sort((a,b)=>a-b));

// // in descending order
// console.log(ar.sort((a,b)=>b-a));

// // through object
// // 1. method => through value
// const items = [
//   { name: "Edward", value: 21 },
//   { name: "Sharpe", value: 37 },
//   { name: "And", value: 45 },
//   { name: "The", value: -12 },
//   { name: "Magnetic", value: 13 },
//   { name: "Zeros", value: 37 },
// ];
// console.log(items.sort((a,b) =>a.value-b.value));

// // 2. method => through name 
// console.log("Sorting through name");
// // 1. method
// function compare(a,b){{
// if(a.name<b.name){
// return -1;}
// else if(b.name<a.name){
// return 1;}
// else{
// return 0;};
// };};
// console.log(items.sort(compare));
// // 2. method - for non ascii values use a function called localComapre
// // syntax - string1.localeCompare(string2);
// console.log(items.sort((a,b)=>a.name.localeCompare(b.name)));

// Filtering array
console.log("Filtering array");
// let aar=[12,34,56,78,90,11,22,33];
// // 1. method
// function isBig(Num){
// return Num>45;}
// console.log(aar.filter(isBig));
// 2. method
// console.log(aar.filter((arrNum)=> arrNum>20));
//3. method
const fruits = ["apple", "banana", "grapes", "mango", "orange"];

/**
 * Filter array items based on search criteria (query)
 */
// function filterItems(arr, query) {
//   return arr.filter((item) => item.toLowerCase().includes(query.toLowerCase()));
// }
// console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
// console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']
//  mapping array
console.log("Mapping array");
// 1. method
let arr=[1,2,3,4,5];
function sqr(num){
return num*num;}
console.log(arr.map(sqr));
// 2. method
console.log(arr.map((num)=> num*num));
// 3. method using two array mapping
let str=["Aman","Ashu","Aditya","Anshu","Gautam"];
let aar=[22, 19, 20, 17, 15];
function mapTwo(arr1,arr2){
    return arr1.map((item,index)=>{
         return "Name:"+item + " Age:"+arr2[index];})}
console.log(mapTwo(str,aar));

 