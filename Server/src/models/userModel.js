import mongoose from "mongoose";

var UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type:String,
        required: true,
        min: 8,
        max: 64
    },
});

var userModel = new mongoose.model("User", UserSchema);

export default userModel;