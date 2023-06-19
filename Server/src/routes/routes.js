import { Router } from "express";
import { getUsers, getUser, createUser, deleteUser, updateUser } from "../controllers/users.js";

const router = Router();
/*
router.get("/", (req, res) => {
    res.send("User homepage");
});
*/
router.get('/count', getUsers);
router.get('/:id', getUser);
router.post('/', createUser);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);

export default router