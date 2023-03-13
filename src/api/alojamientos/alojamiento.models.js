const mongoose = require("mongoose");


const alojamientoSchema = new mongoose.Schema(
    {
        nombre:{type:String, require:true},
        codigo:[{type:mongoose.Types.ObjectId, ref:"users"}],
        tipo:{type:String, enum:["Hotel","Apartamento","Camping"]},
        fotos:{type:String, require:true},
        habitaciones:[{type:mongoose.Types.ObjectId, ref:"habitaciones"}],
        categoria:{
            type:String,
            enum:["estrellas","llaves"],
            require:true
        },
        valoracion:{type:Number, require:true},
        regiones:[{type: mongoose.Types.ObjectId, ref:"regiones", require:true}]
    },
   {
        timestamps: true,
        collection:"alojamientos"
   }
)


const Alojamiento = mongoose.model("alojamientos", alojamientoSchema);

module.exports = Alojamiento;