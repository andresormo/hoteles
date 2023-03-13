const Alojamiento = require("./alojamiento.models");

const getAllAlojamientos = async (req,res,next)=>{
    try {
        const alojamiento = await Alojamiento.find().populate("habitaciones").populate({path:"regiones",populate:{path:"alojamientos"}}).populate("codigo");
        return res.json(alojamiento);
    } catch (error) {
        return next(error);
    }
}

const getAlojamientoById = async ( req, res, next)=>{
    try {
        const {id} = req.params;
        const alojamiento = await Alojamiento.findById(id).populate("habitaciones").populate({path:"regiones",populate:{path:"alojamientos"}}).populate("codigo");
        if(!alojamiento){
            return res.json("No hemos encontrado ese alojamiento, id inexistente");
        }
        return res.json(alojamiento);
    } catch (error) {
        next(error);
    }
}

const getAlojamientoNombre = async(req,res,next)=>{
    try {
        const {nombre} = req.params;
        const alojamiento = await Alojamiento.findOne({nombre:nombre}).populate("habitaciones").populate({path:"regiones",populate:{path:"alojamientos"}}).populate("codigo");
        return res.json(alojamiento);
    } catch (error) {
        return next(error);
    }
}

const crearAlojamiento = async (req,res,next)=>{
    try {
        const newAlojamiento = new Alojamiento(req.body);
        await newAlojamiento.save();
        return res.json(newAlojamiento);
    } catch (error) {
        return next(error);
    }
}

const actualizarAlojamiento = async (req,res,next)=>{
    try {
        const {id} = req.params;
        const alojamientoActual = await Alojamiento.findByIdAndUpdate(id, req.body,{new:true});
        res.status(200).json(alojamientoActual);
    } catch (error) {
        return next(error);
    }
}

module.exports = {getAllAlojamientos, getAlojamientoById, getAlojamientoNombre, crearAlojamiento,actualizarAlojamiento};