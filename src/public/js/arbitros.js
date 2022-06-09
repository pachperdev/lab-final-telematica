const btn = document.getElementById("btn");
let na1;
let aa1;
let pa1;
let na2;
let aa2;
let pa2;
let na3;
let aa3;
let pa3;
let na4;
let aa4;
let pa4;

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
//A2
document.getElementById("na2").addEventListener("change", function () {
    na2 = this.value;
    console.log(na2);
})
document.getElementById("aa2").addEventListener("change", function () {
    aa2 = this.value;
    console.log(aa2);
})
document.getElementById("pa2").addEventListener("change", function () {
    pa2 = this.value;
    console.log(pa2);
})
//A3
document.getElementById("na3").addEventListener("change", function () {
    na3 = this.value;
    console.log(na3);
})
document.getElementById("aa3").addEventListener("change", function () {
    aa3 = this.value;
    console.log(aa3);
})
document.getElementById("pa3").addEventListener("change", function () {
    pa3 = this.value;
    console.log(pa3);
})
//A4
document.getElementById("na4").addEventListener("change", function () {
    na4 = this.value;
    console.log(na4);
})
document.getElementById("aa4").addEventListener("change", function () {
    aa4 = this.value;
    console.log(aa4);
})
document.getElementById("pa4").addEventListener("change", function () {
    pa4 = this.value;
    console.log(pa4);
})

btn.addEventListener("click", function () {
    registro();
});

async function registro() {
    let response = await fetch(`/arbitros?na1=${na1}&aa1=${aa1}&pa1=${pa1}&na2=${na2}&aa2=${aa2}&pa2=${pa2}&na3=${na3}&aa3=${aa3}&pa3=${pa3}&na4=${na4}&aa4=${aa4}&pa4=${pa4}`)
    let json = await response.json();

}
