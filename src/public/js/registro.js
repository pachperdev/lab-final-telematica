const btn = document.getElementById("btn");
let email
let psw 
let rpsw
let reg

document.getElementById("email").addEventListener("change",function(){
    email = this.value; 
    console.log(email)

})
document.getElementById("psw").addEventListener("change",function(){
  psw = this.value; 
    console.log(psw)

})



btn.addEventListener("click",function(){

    

    reg = [email,psw];
    console.log(reg)


  registro();

});

async function registro(){
   let response = await fetch(`/registro?email=${email}&psw=${psw}`)
   let json = await response.json();
   


   if(json.data =! email ){
         
    alert("Usuario Ingresado");

         
   }else if(json.data == email){
      alert("El Usuario que trata de ingresar ya se encuentra registrado")
   }

}