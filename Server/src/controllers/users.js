import UserModel  from "../models/userModel.js";
import { hashPassword, comparePassword } from "../helpers/authHashing.js";
import jwt from "jsonwebtoken";

//Obtain all user from the database
export const getUsers = async (req, res) => {
    try {
        const users = await UserModel.find();
        if(!users){
            return res.json({ message: "Users not found"});
        }
        return res.json({users : users});
        //res.status(200).json(users);
    }
    catch(error){
        res.status(404).json({ message: error.message });
    }
};

//create a user and save it to the database

export const createUser = async (req, res) => {
    if(!req.body.firstName && !req.body.lastName && !req.body.email && !req.body.password){
        return res.status(400).send({
            message: "User content can not be empty"});
        }

    const hashedPassword = await hashPassword(req.body.password);

    const user = new UserModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPassword  // if this generates problem, originally was re.body.password
    });

    await user.save().then(data => {
        res.send({
            message: "User created successfully",
            user: data
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error while creating the User."
        });
    });
};

//find a single user with an email and compare hashed password with the give by the user
export const signIn = async (req, res) => {
    try{
        const user = await UserModel.findOne({email:req.body.email});
        if(!user){
            return res.status(404).json({ message: "Email not found"});
        }

        const match = await comparePassword(req.body.password, user.password);
        if(!match){
            return res.json({ message: "Incorrect password"});
        }

        const payload = { 
            email: user.email,
        }
        const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES_IN});

        return res.cookie("access_token", token, {httpOnly: true}).json({success:true, message:'LoggedIn Successfully'})
    } catch(error){
        res.status(500).json({ message: error.message });
    }
};

export const logOut = async (req, res) => {
    return res.clearCookie("access_token").json({success:true, message:'LoggedOut Successfully'})
}

export const protectedRoute = async (req, res) => {
    return res.json({message:'Protected Route access succesfully'})
}

//update user by a given UserId
export const updateUser = async (req, res) => {
    if(!req.body){
        res.status(400).send({
            message: "User content can not be empty"});
    }

    const id = req.params.id;

    await UserModel.findByIdAndUpdate(id, req.body, { useFindAndModify: true }).then(data => {
        if(!data){
            res.status(404).send({
                message: `Cannot update User with id=${id}. User was not found!`
        });
    }else{
        res.send({message: "User was updated successfully."})
    }
    }).catch(err => {
        res.status(500).send({
            message: "Error updating User with id=" + id
        });
    });
};

//delete a user with a given userId
export const deleteUser = async (req, res) => {
    const id = req.params.id;
    await UserModel.findByIdAndRemove(req.params.id).then(data => {
        if(!data){
            res.status(404).send({
                message: `Cannot delete User with id=${id}. User was not found!`
        });
    }else{
        res.send({message: "User was deleted successfully."});
    }}).catch(err => {
        res.status(500).send({
            message: "Could not delete User with id=" + id
        });
    });
};