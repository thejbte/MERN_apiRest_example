
const mongoose = require('mongoose');
const Schem = mongoose.Schema;

const ventSchema = Schem( {
    fecha: Date,
    vendedor: String,
    idVenta: Number,
    cantidad:Number,
    precio:Number,
    cliente:String,
    total:Number
} );

module.exports = mongoose.model( 'Vent' , ventSchema);