
const express  = require('express');// server

const bodyParser  = require('body-parser');// parser json

const mongoose = require('mongoose');
const { application } = require('express');

const app =  express();

const port  = process.env.PORT || 3001;

const Ventas =require('./models/vent');

app.use( express.urlencoded({extended: false}));
app.use(express.json());


const cors=require("cors");
app.use(cors({ origin: true, credentials: true })); // habilita auth


// updtae PUT 
//Ventas.findByIdAndUpdate

//delete
/*Ventas.findById(idventa, (err, ventas)=>{
    ventas.remove(

    )
})*/


app.get('/ventas', (req, res) => {
    Ventas.find({}, (err, ventas)=>{
        if(err) return res.status(500).send({message: `Internal Error Server... ${err}`});
        if(!ventas)  return res.status(404).send({message: `Not found ${err}`});

        res.status(200).send({ventas});
    })
});

app.post('/ventas/agregar', (req, res)=>{
    console.log('POST /ventas/agregar');
    console.log(req.body);

    let venta = new Ventas();
    venta.fecha = req.body.fecha;
    venta.vendedor = req.body.vendedor;
    venta.idVenta = req.body.idVenta;
    venta.cantidad = req.body.cantidad;
    venta.precio = req.body.precio;
    venta.cliente = req.body.cliente;
    venta.total = req.body.total;

    venta.save((err, ventaGuardada )=>{
        if(err){
            return res.status(500).send({message: `Error al guardar en la BD... ${err}`});
        }
        res.status(200).send({venta: ventaGuardada});

    });
});

//
mongoose.connect('mongodb://localhost:27017/vent' ,(err, res)=>{
    if(err){
        return console.log(`Error BD ${err}`);
    }
    console.log('BD is connected...');

    app.listen( port , ()=>{
        console.log(`API running: launch ->  http://localhost:${port}`);
    }  );

} ) //'mongodb://localhost:27017/userBD'
