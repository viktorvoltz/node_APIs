import express from 'express';
import dbUtil from '../dbUtil.js';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

const users = [
    
]

//routes begin with /users
router.get('/', (req, res) => {
    res.send(users);
    res.send('hello');
});

router.post('/', async (req, res) => {
    const user = req.body;

    const userId = uuidv4();
    const userWithId = { ...user, id: userId}
    users.push(userWithId);

    res.send(`user with the username ${user.F_name} added to the database!`);
    try {
        await dbUtil.createuser(user)
        res.status(200).send({ message: "user added to Mongod database", data: null })
      } catch (error) {
        res.status(400).send({ message: "could add user to Mongod" })
      }

})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    //const id = req.params.id;

    const foundUser = users.find((user) => {
        return user.id === id;
    })

    res.send(foundUser);
})

export default router;