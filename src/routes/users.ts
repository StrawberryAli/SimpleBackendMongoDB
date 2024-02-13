import express from 'express';
import { createUserController } from "../controllers/createUser";
import { getUsersController } from "../controllers/getUsers";
import { getUserController } from "../controllers/getUser";
import { deleteUserController } from '../controllers/deleteUser';
import { updateUserController } from '../controllers/updateUser';

const router = express.Router();

router.get('/',getUsersController);
router.post('/',createUserController);
router.get('/:id',getUserController);
router.delete('/:id',deleteUserController);
router.post('/:id',updateUserController);

module.exports = router;