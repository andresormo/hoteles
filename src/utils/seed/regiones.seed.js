const mongoose = require("mongoose");
const Region = require("../../api/regiones/regiones.models");

require("dotenv").config();

const LINK_DB = process.env.MONGO_DB;

const region = [
    {
      nombre: "Cádiz",
      portada: "https://queverencadiz.es/wp-content/uploads/2020/03/portada-cadiz.png "
    },
    {
        nombre:"Sevilla",
        portada: "https://media.vogue.es/photos/62725ca9faf6563eafb0ade9/2:3/w_2301,h_3452,c_limit/AIRE%20Ancient%20Baths%20Sevilla_09A4776.jpg"
    }
];

mongoose.connect(LINK_DB)
.then(async()=>{
    const region = await Region.find();
    if(region.length){
        await Region.collection.drop();
        console.log("Regiones eliminadas con éxito");
    }
})
.catch((error)=>console.log("Error al eliminar las regiones de la bbdd"))
.then(async()=>{
    await Region.insertMany(region);
    console.log("Regiones creadas con éxito");
})
.finally(()=> mongoose.disconnect());
