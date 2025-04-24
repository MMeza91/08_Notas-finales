/* alert("todo contectado"); */


let n1html = prompt("ingrese la nota 1 de HTML: ");
document.getElementById("nota1html").textContent = n1html;

let n2html = prompt("ingrese la nota 2 de HTML: ");
document.getElementById("nota2html").textContent = n2html;

let n3html = prompt("ingrese la nota 3 de HTML: ");
document.getElementById("nota3html").textContent = n3html;

let html_promedio = (parseFloat(n1html) + parseFloat(n2html) + parseFloat(n3html))/3;
document.getElementById("promediohtml").textContent = html_promedio.toFixed(2);

/* CSS */
let n1css = prompt("ingrese la nota 1 de CSS: ");
document.getElementById("nota1css").textContent = n1css;

let n2css = prompt("ingrese la nota 2 de CSS: ");
document.getElementById("nota2css").textContent = n2css;

let n3css = prompt("ingrese la nota 3 de CSS: ");
document.getElementById("nota3css").textContent = n3css;

let css_promedio = (parseFloat(n1css) + parseFloat(n2css) + parseFloat(n3css))/3;
document.getElementById("promediocss").textContent = css_promedio.toFixed(2);

/* JavaScript */
let n1js = prompt("ingrese la nota 1 de JavaScript: ");
document.getElementById("nota1js").textContent = n1js;

let n2js = prompt("ingrese la nota 2 de JavaScript: ");
document.getElementById("nota2js").textContent = n2js;

let n3js = prompt("ingrese la nota 3 de JavaScript: ");
document.getElementById("nota3js").textContent = n3js;

let js_promedio = (parseFloat(n1js) + parseFloat(n2js) + parseFloat(n3js))/3;
document.getElementById("promediojs").textContent = js_promedio.toFixed(2);