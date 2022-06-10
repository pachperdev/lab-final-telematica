const btn = document.getElementById("btn");
let ne;
let ce;
let ue;

document.getElementById("ne").addEventListener("change", function () {
    ne = this.value;
    console.log(ne);
})
document.getElementById("ce").addEventListener("change", function () {
    ce = this.value;
    console.log(ce);
})
document.getElementById("ue").addEventListener("change", function () {
    ue = this.value;
    console.log(ue);
})

btn.addEventListener("click", function () {
    registro();
});

async function registro() {
    let response = await fetch(`/estadios?ne=${ne}&ce=${ce}&ue=${ue}`)
    let json = await response.json();
}
