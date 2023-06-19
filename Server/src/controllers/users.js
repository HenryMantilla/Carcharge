import UserModel  from "../models/userModel.js";

//Obtain all user from the database
export const getUsers = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).json(users);
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
    const user = new UserModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
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

//find a single user with a userId
export const getUser = async (req, res) => {
    try{
        const userxd = await UserModel.findById(req.params.id);
        res.status(200).json(userxd);
    } catch(error){
        res.status(404).json({ message: error.message });
    }
};


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