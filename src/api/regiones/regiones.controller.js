const { deleteFile } = require("../../middlewares/delete");
const Region = require("./regiones.models");

const getAllRegion = async (req, res, next) => {
    try {
        const region = await Region.find().populate({path:"alojamientos",populate:{path:"habitaciones"}});
        return res.json(region);
    } catch (error) {
        return next(error);
    }
}

const crearRegion = async (req, res, next) => {
    try {
        const newRegion = await new Region(req.body);
        if(req.file){
            newRegion.portada = req.file.path;
        }
        newRegion.save();
        return res.status(200).json(newRegion);
    } catch (error) {
        return next(error);
    }
}

const actualizarRegion = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (req.file) {
            const oldRegion = await Region.findById(id);
            if (oldRegion.portada) {
                deleteFile(oldRegion.portada);
            }
            req.body.portada = req.file.path;
        }
        const regionActual = await Region.findByIdAndUpdate(id, req.body, { new: true });
        return res.status(200).json(regionActual);
    } catch (error) {
        return next(error);
    }
}


module.exports = { getAllRegion, crearRegion, actualizarRegion};