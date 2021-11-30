import express from 'express';

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

router.post('/')

export default router;