const partido1 = document.getElementById("partidovalue")
const partido2 = document.getElementById("partidovalue2")
const partido3 = document.getElementById("partidovalue3")
const partido4 = document.getElementById("partidovalue4")
function partido() {
  fetch('data')
    .then(response => {
      return response.json();
    }).then(json => {

      const part = json.data;
      const equip1 = part[0].nombre;
      const equip2 = part[1].nombre;
      const equip3 = part[2].nombre;
      const equip4 = part[3].nombre;
      const equip5 = part[4].nombre;
      const equip6 = part[5].nombre;
      const equip7 = part[6].nombre;
      const equip8 = part[7].nombre;

      partido1.innerHTML = `${equip1} vs ${equip2}`;
      partido2.innerHTML = `${equip3} vs ${equip4}`;
      partido3.innerHTML = `${equip5} vs ${equip6}`;
      partido4.innerHTML = `${equip7} vs ${equip8}`;
    })

}

setInterval(partido, 1000);