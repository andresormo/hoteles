const mongoose = require("mongoose");
require("dotenv").config();

const LINK_DB=process.env.MONGO_DB;

const connectDB = async()=>{
    try {
        mongoose.set("strictQuery", true);
        const db = await mongoose.connect(LINK_DB);
        const {host, name}= db.connection;
        console.log(`Conectado a la ddbb:${host} con éxito`);
    } catch (error) {
        console.log("No me pude conectar a la base de datos");
    }
}


module.exports={connectDB};