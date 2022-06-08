function ir(){
    var c = 1234;
    var u = "admin";

    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user == u & pass == c) {
        window.location="minuto-minuto.html"
    }
    else(
        alert("Usuario o contraseña erroneo")
    )

}