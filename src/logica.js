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
        

    });


});


//registro//

app.get('/registro',(req,res)=>{

     let {email,psw} = req.query
     
   
    

    con.query(`select email from usuarios Where email = '${email}' `, (err, mess, fields) => {
         
        
        if(mess=[]){

            con.query(`INSERT INTO usuarios(email,contrasena) Values('${email}','${psw}')`, (err,result)=>{
               if (err)throw err;
               console.log("Usuario Registrado")


            });

        }else{
            
            res.status(200).json({

                 data:mess,

            });


        }


        
    
    });

 
})

//login//
app.get("/login",(req,res)=>{

    let {user,pass} = req.query
    con.query(`select email,contrasena from usuarios Where email = '${user}' and contrasena = '${pass}' `, (err, mess, fields) => {
  
   
        res.status(200).json({

            data:mess,

       });


       


        
    })
    
   



});



//settings
app.set('port', process.env.PORT || 3000)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))

app.listen(app.get('port'), () => {
    console.log('server on port 3000')
});