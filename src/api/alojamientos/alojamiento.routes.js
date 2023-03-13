const {getAllAlojamientos, getAlojamientoById, getAlojamientoNombre, crearAlojamiento,actualizarAlojamiento} = require("./alojamiento.controller");

const routerAlojamientos = require("express").Router();

routerAlojamientos.get("/",getAllAlojamientos);
routerAlojamientos.get("/alojamiento/:id", getAlojamientoById);
routerAlojamientos.get("/alojamiento/nombre/:nombre", getAlojamientoNombre);
routerAlojamientos.post("/",crearAlojamiento);
routerAlojamientos.put("/:id",actualizarAlojamiento)

module.exports = routerAlojamientos;