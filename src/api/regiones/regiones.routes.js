const { isAdmin, isAuth } = require("../../middlewares/auth");
const upload = require("../../middlewares/file");
const { getAllRegion, crearRegion, actualizarRegion } = require("./regiones.controller");


const regionesRouter = require("express").Router();

regionesRouter.get("/",[isAuth],getAllRegion);
regionesRouter.post("/",[isAdmin],upload.single("portada"),crearRegion);
regionesRouter.put("/:id",[isAdmin],upload.single("portada"),actualizarRegion);

module.exports = regionesRouter;