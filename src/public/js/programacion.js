async function enviar(){

  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  
  let response = await fetch(`/login?user=${user}&pass=${pass}`)
  let json = await response.json();

  console.log(json.data[0].email)
  console.log(json.data[0].contrasena)

}