console.log("Modren Js DOM")
// // accesing the element in dom
// // 1. getElementById
//     let id=document.getElementById("dom-id");
// console.log(id);
// // 2. getElementsByClassName
// let className=document.getElementsByClassName("dom-description");
// console.log(className);
// // 3. getElementsByTagName
// let tagName=document.getElementsByTagName("h1");
// console.log(tagName);
// // 4. querySelector
// let querySelector=document.querySelector(".dom-title");
// console.log(querySelector);
// // 5. querySelectorAll
// let querySelectorAll=document.querySelectorAll("#dom-id");
// console.log(querySelectorAll);

// modifying the element in dom
// // 1. innerHTML
// let para=document.getElementById("dom-id");
// let title=document.querySelector(".dom-title");
// function change(){
// para.innerHTML="<h2>DOM stands for Document Object Model. It is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content.</h2>";
// // style
// title.style.color="blue";
// title.style.fontSize="40px";
// }

// // 2. outer HTML -> it rpelce the article along with the tag attributes. 
// let doc=document.querySelector(".dom-des")
// console.log(doc);
// doc.outerHTML="<h3> DOM stands for Document Object Model. It is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content.</h3>";
// console.log(doc);


// // 3. textContent
// let text=document.querySelector(".dom-description");
// text.textContent="<p>DOM is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content.</p>";


// Adding element in DOM
// 1. appendChild
// let des=document.querySelector(".dom-title");
// let p=document.createElement("p");
// p.textContent="Let's learn DOM";
// des.appendChild(p);
// 2 insertadjacentElement
//      let des=document.querySelector(".dom-title");
// let p=document.createElement("p");
// p.textContent="Lets Learn DOM";
// des.insertAdjacentElement("afterend",p);

// Remove element in DOM
// 4.removeChild
// let des=document.querySelector(".dom-title");
// let p=document.createElement("p");
// p.textContent="Let's learn DOM";
// des.appendChild(p);
// des.removeChild(p);
 
// css properties
// 1. style
let title=document.querySelector(".dom-title");
title.style.color="yellow";
// 2. classList
let des=document.querySelector(".dom-description");
des.classList.add("new-class");
des.classList.remove("dom-description");
des.classList.toggle("new-class");








