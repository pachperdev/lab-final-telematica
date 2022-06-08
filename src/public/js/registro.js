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
document.getElementById("psw-repeat").addEventListener("change",function(){
   rpsw = this.value; 
    console.log(rpsw)

})


btn.addEventListener("click",function(){


    reg = [email,psw];


  /*   fetch('/registro',{
      
        headers: {
            'Content-Type':'application/json'

        },
        method:'POST',
        body: JSON.stringify(reg)
        


    }) */

  registro();

});

async function registro(){




}