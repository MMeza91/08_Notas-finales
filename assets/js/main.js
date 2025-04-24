/* alert("todo contectado"); */


let n1html = prompt("ingrese la nota 1: ");
document.getElementById("nota1html").textContent = n1html;

let n2html = prompt("ingrese la nota 2: ");
document.getElementById("nota2html").textContent = n2html;

let n3html = prompt("ingrese la nota 3: ");
document.getElementById("nota3html").textContent = n3html;

let html_promedio = (n1html + n2html + n3html)/3;
document.getElementById("promediohtml").textContent = html_promedio;

/* CSS */
let n1css = prompt("ingrese la nota 1: ");
document.getElementById("nota1css").textContent = n1css;

let n2css = prompt("ingrese la nota 2: ");
document.getElementById("nota2css").textContent = n2css;

let n3css = prompt("ingrese la nota 3: ");
document.getElementById("nota3css").textContent = n3css;

let css_promedio = (n1css + n2css + n3css)/3;
document.getElementById("promediocss").textContent = css_promedio;

/* JavaScript */
let n1js = prompt("ingrese la nota 1: ");
document.getElementById("nota1js").textContent = n1js;

let n2js = prompt("ingrese la nota 2: ");
document.getElementById("nota2js").textContent = n2js;

let n3js = prompt("ingrese la nota 3: ");
document.getElementById("nota3js").textContent = n3js;

let js_promedio = (n1js + n2js + n3js)/3;
document.getElementById("promediojs").textContent = js_promedio;