const btn = document.getElementById("btn");
let na1;
let aa1;
let pa1;

document.getElementById("na1").addEventListener("change", function () {
    na1 = this.value;
    console.log(na1);
})
document.getElementById("aa1").addEventListener("change", function () {
    aa1 = this.value;
    console.log(aa1);
})
document.getElementById("pa1").addEventListener("change", function () {
    pa1 = this.value;
    console.log(pa1);
})

btn.addEventListener("click", function () {
    registro();
});

async function registro() {
    let response = await fetch(`/arbitros?na1=${na1}&aa1=${aa1}&pa1=${pa1}`)
    let json = await response.json();
}
