//requires
const express=require('express');
const app=express();
const mainRouter = require('./routers/mainRouters')

//llamado a public
app.use(express.static('public'));

//llamado al puerto
PORT = 3030;
app.listen(PORT, ()=>console.log("Servidor corriendo en el puerto " + PORT))

//rutas

app.use('/', mainRouter)