
const mysql = require("mysql");
var con = mysql.createConnection({

    host: "telematica3229.ci94bml2ssya.us-east-2.rds.amazonaws.com",
    user: "admin",
    password: "Fosakia132balon",
    database: "bdtelematica"
});
con.connect(function (err) {
    if (err) throw err;
    console.log("Conectado")

})
con.query('select * from arbitros order by id', (err, mess, fields) => {

    console.log(mess)

});