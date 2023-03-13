const { deleteFile } = require("../../middlewares/delete");
const Habitaciones = require("./habitacion.models");

const crearHabitacion = async(req,res,next)=>{
    try {
        const newHabitacion = await new Habitaciones(req.body);
        if(req.file){
            newHabitacion.foto = req.file.path;
        }
        await newHabitacion.save();
        return res.status(200).json(newHabitacion);
    } catch (error) {
        return next(error);
    }
}

const getHabitacion = async(req,res,next)=>{
    try {
        const habitacion= await Habitaciones.find();
        return res.json(habitacion);
    } catch (error) {
        return next(error);
    }
}

const actualizarHabitacion = async (req,res, next)=>{
    try {
        const {id} = req.params;
        if(req.file){
            const OldHabitacion = await Habitaciones.findByIdAndUpdate(id);
            if(OldHabitacion.foto){
                deleteFile(OldHabitacion.foto)
            }
            req.body.foto = req.file.path;
        }
        const habitacionActual = await Habitaciones.findByIdAndUpdate(id,req.body,{new:true});
        return res.status(200).json(habitacionActual);
    } catch (error) {
        return next(error);
    }
}

module.exports = {crearHabitacion, getHabitacion,actualizarHabitacion};