const mongoose = require("mongoose");

const regioneSchema = new mongoose.Schema(
    {
        nombre:{type:String,required:true},
        portada:{type:String,require:true},
        alojamientos:[{type:mongoose.Types.ObjectId,ref:"alojamientos"}]
    },
    {
        timestamps: true,
        collection:"regiones"
    }
)

const Region = mongoose.model("regiones", regioneSchema);

module.exports = Region;