import { Router } from "express";
import { getUsers, signIn, createUser, deleteUser, updateUser, logOut, protectedRoute} from "../controllers/users.js";
import {verifyToken} from "./validateToken.js";

const router = Router();

router.get('/protected', verifyToken, protectedRoute)

router.get('/count', getUsers);
router.get('/logout', verifyToken, logOut);
router.post('/signIn', signIn);  // Changefrom get to post
router.post('/signUp', createUser);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);

export default router