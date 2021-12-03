import express from 'express';
import { createUsers, getUsers, getUser, deleteUser, updateUser  } from '../controllers/users.js';

const router = express.Router();



//routes begin with /users
router.get('/', getUsers);



router.post('/', createUsers);

router.get('/:id', getUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser)

export default router;