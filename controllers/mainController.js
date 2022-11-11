const path=require('path')

let productos = [

    {id: 1,
    nombre:'Cafetera Moulinex',
    img:'/images/img-cafetera-moulinex.jpg',
    precio:'$6.770',
    descuento:'40% off'},

    {id: 2,
    nombre:'MacBook Pro 2019',
    img:'/images/img-macbook-pro-2019.jpg',
    precio:'$230.000',
    descuento:'20% off'},

    {id: 3,
    nombre:'Samsung Galaxy S10',
    img:'/images/img-samsung-galaxy-s10.jpg',
    precio:'$70.500',
    descuento:'10% off'},
    
    {id: 4,
    nombre:'SmartTv Samsung 43',
    img:'/images/img-tv-samsung-smart.jpg',
    precio:'$23.200',
    descuento:'5% off'},

]

const mainController = {
    index:(req, res) => {
        res.render('home',{productos})
    },

    productDetail:(req, res) => {
        res.render('productDetail',(productos.id))
    },

    register:(req, res) => {
        res.render('register',{productos})
    },

    login:(req, res) => {
        res.render('login',{productos})
    },
}

module.exports=mainController