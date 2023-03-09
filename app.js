"use strict"

let fullName;
let age;
let mail;

function sayHello() {
  fullName = document.querySelector("#name").value;
  age = document.querySelector("#age").value;
  mail = document.querySelector("#email").value;

  document.querySelector("#output").textContent = `Hej ${fullName}, alder: ${age}. Mail: ${mail}`;
}
document.querySelector("button").addEventListener("click", sayHello);

