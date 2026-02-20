console.log("Basic 4");
// // Functions
// // 1. method
// function add(a,b){
// return a+b;
// }
// console.log(add(5,6));
// // parts of function
// // 1.function definition
// function greet(){}
// // 1. function declaration
// function sub(a,b){
// return a-b;
// }
// // 2. function call
// sub(10,5);
// // Types of functions
// // 1. Named function
// function mul(a,b){
// return a*b;
// }
// console.log(mul(7,8));
// // 2. Anonymous function
// const naam =function(){
// console.log("Hello");}
// console.log(naam);
// // 3. Fuction expression
// function div(a,b){
//  return a/b;}
// console.log(div(20,4));
// // 4. Arrow function
// const sqr= (n)=>{
// return n*n;
// }
// console.log(sqr(5));
// // 5. IIFE (Immediately Invoked Function Expression)
// var counter = (function (){
// var count=0;
// return{
// increment:function(){
// count++;
// },
// decrement:function(){
// count--;
// },
// getCount:function(){
// return count;
// }};})();
// counter.increment();
// console.log(counter.getCount());
// call back function
function add(a, b, callback) {
    return callback(a, b);
}
function sum(x, y) {
    return x + y;
}
console.log(add(3, 4, sum));
// 7. Constructor function
function area(r) {
    this.radius = r;
    this.area = function () { return Math.PI * r * r; }
};
const cir = new area(5);
console.log(cir.area());
// 8. Recursive function
function fact(n) {
    if (n == 0 || n == 1) {
        return 1;
    }
    else {
        return n * fact(n - 1);
    }
}
console.log(fact(5));
// 9. Generator function
function* num() {
    yield 1;
    yield 2;
    yield 3;
}
console.log(num().next().value);
console.log(num().next().value);
// 10. Nested function
function outer(num) {
    function inner(num) {
        console.log("Inner function");
        return num * 3;
    };
    console.log(inner(num));
   console.log("Outer function");
    return num * 2;
}
console.log(outer(2));
// Pure function
function add(a,b){
return a+b;
}
console.log(add(5,10));
// Rest Parameter function
function sum(...num){
return num.reduce((a,b)=>a+b,0)}
console.log(sum(1,2,3,4,5));
// Arguments object function
function mul(){
let total =1;
for (let key of arguments){
    total*=key;
}
return total;
}
console.log(mul(1,2,3,4));
// Default parameter function
function interest (p,r=9,y){
   return (p*r*y/100);}
console.log(interest(1000,5,3));
// if we want to use default parameter then it should be at the end of parameter list otherwise it will give error
// trick but bad practice
function interest (p,r=9,y){
   return (p*r*y/100);}
console.log(interest(1000,undefined,3));
const n = [1, 2, 3, 4, 5];
console.log( n.find((num) => num % 2 === 0));
// getter and setter function
const person={
get fullName(){
console.log(`${person.fName} ${person.lName}`) },
set fullName(value){
let parts=value.split(" ");
      this.fName=parts[0];
      this.lName=parts[1];
}}
     
person.fullName="Aman Kumar";
person.fullName;
person.fullName="Ashu Kumar";
person.fullName;