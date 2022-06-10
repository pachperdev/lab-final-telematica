const na1 = document.getElementById("na1")
const aa1 = document.getElementById("aa1")
const pa1 = document.getElementById("pa1")

const na2 = document.getElementById("na2")
const aa2 = document.getElementById("aa2")
const pa2 = document.getElementById("pa2")

const na3 = document.getElementById("na3")
const aa3 = document.getElementById("aa3")
const pa3 = document.getElementById("pa3")

const na4 = document.getElementById("na4")
const aa4 = document.getElementById("aa4")
const pa4 = document.getElementById("pa4")

function arbitros() {
    fetch('/arbitrosmostrar')
        .then(response => {
            return response.json();
        }).then(json => {

            const part = json.data;
            console.log(part);
            const nombrea1 = part[0].nombre;
            const apellidoea1 = part[0].apellido;
            const procedenciaea1 = part[0].procedencia;

            const nombrea2 = part[1].nombre;
            const apellidoea2 = part[1].apellido;
            const procedenciaea2 = part[1].procedencia;

            const nombrea3 = part[2].nombre;
            const apellidoea3 = part[2].apellido;
            const procedenciaea3 = part[2].procedencia;

            const nombrea4 = part[3].nombre;
            const apellidoea4 = part[3].apellido;
            const procedenciaea4 = part[3].procedencia;

            na1.innerHTML = `${nombrea1}`;
            aa1.innerHTML = `${apellidoea1}`;
            pa1.innerHTML = `${procedenciaea1}`;

            na2.innerHTML = `${nombrea2}`;
            aa2.innerHTML = `${apellidoea2}`;
            pa2.innerHTML = `${procedenciaea2}`;

            na3.innerHTML = `${nombrea3}`;
            aa3.innerHTML = `${apellidoea3}`;
            pa3.innerHTML = `${procedenciaea3}`;

            na4.innerHTML = `${nombrea4}`;
            aa4.innerHTML = `${apellidoea4}`;
            pa4.innerHTML = `${procedenciaea4}`;

        })

}

setInterval(arbitros, 1000);