const btn = document.getElementById("btn");
let team
let nombre
let apellido
let numeros
btn.addEventListener("click", function () {
  team = document.getElementById("team").value;
  console.log(team)
  nombre = document.getElementById("nombre").value;
  console.log(nombre)
  apellido = document.getElementById("apellido").value;
  console.log(apellido)
  numeros = document.getElementById("numeros").value;
  console.log(numeros)
  registropartidos();
});

async function registropartidos() {
    let response = await fetch(`/equipos2?team=${team}&nombre=${nombre}&apellido=${apellido}&numeros=${numeros}`)
    let json = await response.json();
}