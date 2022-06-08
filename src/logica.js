const express = require('express');
const app = express();
const mysql = require("mysql");
const path = require("path");


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

app.get('/data', (req, res) => {

    con.query('select nombre from equipos order by id', (err, mess, fields) => {

        res.status(200).json({
            data: mess,


        });
        console.log(mess)

    });


});


//settings
app.set('port', process.env.PORT || 3000)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))

app.listen(app.get('port'), () => {
    console.log('server on port 3000')
});