const mongoose = require("mongoose");

const habitacionSchema = mongoose.Schema(
    {
        tipo:{
            type:String,
            enum:["Simple", "Doble", "Triple","Cuádruple","Otras"],
            require:true,
        },
        habitaculos:{type:Number, require:true},
        cantidad:{type:Number, require:true},
        camas:{type:Number, require:true},
        foto:{type:String}
    },
    {
        timestamps: true,
        collection:"habitaciones"
    }
)

const Habitaciones = mongoose.model("habitaciones", habitacionSchema);
module.exports = Habitaciones;
