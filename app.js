function sayHello() {
  document.querySelector("h3").textContent =
    "Hello " + document.querySelector("input").value;
}
document.querySelector("button").addEventListener("click", sayHello);

/* 
function sayHello2() {
  document.getElementById("output").textContent =
    "Hello " + document.getElementById("field").value;
}
document.getElementById("btn").addEventListener("click", sayHello2);
 */
