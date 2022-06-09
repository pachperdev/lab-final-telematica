


async function ir(){
    var c = 1234;
    var u = "admin";

    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    
    let response = await fetch(`/login?user=${user}&pass=${pass}`)
    let json = await response.json();

    console.log(json.data[0].email)
    console.log(json.data[0].contrasena)



   
    if (user == json.data[0].email & pass == json.data[0].contrasena) {
        window.location="arbitros.html"
    }
    else(
        alert("Usuario o contraseña erroneo")
    )

}