const { isAuth, isAdmin } = require("../../middlewares/auth");
const upload = require("../../middlewares/file");
const {crearHabitacion, getHabitacion,actualizarHabitacion} = require("./habitacion.controller");

const habitacionRouter = require("express").Router();

habitacionRouter.post("/",upload.single("foto"), crearHabitacion);
habitacionRouter.get("/",getHabitacion);
habitacionRouter.put("/:id",upload.single("foto"), actualizarHabitacion);

module.exports = habitacionRouter;