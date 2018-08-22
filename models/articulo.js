var bcrypt = require("bcrypt-nodejs");
var mongoose = require("mongoose");
var articuloSchema = mongoose.Schema({
    nombre:{type: String,require:true},
    descripcion:{type:String,require:true},
    direccion:{type:String,require:true},
    numero:{type:String,require:true},
    calidad:{type:Number,require:true},
    
    
});

var Articulo = mongoose.model("Articulo",articuloSchema);
module.exports = Articulo;