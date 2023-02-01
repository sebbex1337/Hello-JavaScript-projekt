function sayHello() {
  document.querySelector("#h3name").textContent =
    "Hello " + document.querySelector("#name").value;
  document.querySelector("#h3age").textContent =
    "Alder: " + document.querySelector("#age").value;
  document.querySelector("#h3email").textContent =
    "Email: " + document.querySelector("#email").value;
}
document.querySelector("button").addEventListener("click", sayHello);

/* 
function sayHello2() {
  document.getElementById("output").textContent =
    "Hello " + document.getElementById("field").value;
}
document.getElementById("btn").addEventListener("click", sayHello2);
 */
