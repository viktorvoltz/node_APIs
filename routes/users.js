import express from 'express';
import dbUtil from '../dbUtil.js';

const router = express.Router();

const users = [
    {
        F_name: "john",
        L_name: "doe",
        age: 25
    },
    {
        F_name: "jane",
        L_name: "doe",
        age: 24
    },
]

//routes begin with /users
router.get('/', (req, res) => {
    res.send(users);
    res.send('hello');
});

router.post('/', async (req, res) => {
    const user = req.body;

    users.push(user)

    res.send(`user with the username ${user.F_name} added to the database!`);
    try {
        await dbUtil.createuser(user)
        res.status(200).send({ message: "user added to Mongod database", data: null })
      } catch (error) {
        res.status(400).send({ message: "could add user to Mongod" })
      }

})

export default router;