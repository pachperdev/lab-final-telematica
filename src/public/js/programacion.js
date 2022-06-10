const btn = document.getElementById("btn");
let ea1
let eb2
let ese
var fecha

btn.addEventListener("click", function () {
  ea1 = document.getElementById("TeamA").value;
  console.log(ea1)
  eb2 = document.getElementById("TeamB").value;
  console.log(eb2)
  es1 = document.getElementById("Estadio").value;
  console.log(es1)
  fecha=document.getElementById("meeting-time");
  console.log(fecha)
  registropartidos();
});

async function registropartidos() {
    let response = await fetch(`/program?ea1=${ea1}&eb2=${eb2}&es1=${es1}`)
    let json = await response.json();
}