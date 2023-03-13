const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema(
    {
        email: { type: String, require: true, unique: true, trim: true },
        password: { type: String, trim: true, require: true },
        rol: { type: String, default: "user", enum: ["user", "admin","property"], required: true},
        propiedades: [{ type: mongoose.Types.ObjectId, ref: "alojamientos" }],
        codigo: {type: String, unique: true},
    }
)

userSchema.pre("save", function (next) {
    this.password = bcrypt.hashSync(this.password, 10);
    next();
})

const User = mongoose.model("users", userSchema);
module.exports = User;