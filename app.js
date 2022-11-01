//requires
const express=require('express');
const app=express();
const path=require('path')

//llamado a public
app.use(express.static('public'));

//llamado al puerto
PORT = 3030;
app.listen(PORT, ()=>console.log("Servidor corriendo en el puerto " + PORT))


//llamado al home
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/home.html'))
});
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/home.html'))
});
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/register.html'))
});
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/login.html'))
});


//error 404
app.get('*', (req, res) => {
    res.status(404).send("Ruta no encontrada")
})