import dbUtil from '../dbUtil.js';
import { v4 as uuidv4 } from 'uuid';

let users = [
    
]


export const createUsers = async (req, res) => {
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

}

export const getUsers = async (req, res) => {
    try {
        const allUsers = await dbUtil.getAllusers();
        res.status(200).send({ message: "gotten users from Mongod database", data: null, allUsers, users });
        console.log(allUsers);
      } catch (error) {
        res.status(400).send({ message: "could not add user to Mongod" },);
      }

}

export const getUser = (req, res) => {
    const { id } = req.params;
    //const id = req.params.id;

    const foundUser = users.find((user) => {
        return user.id === id;
    })

    res.send(foundUser);
}

export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id);
    
    res.send(`user with the id: ${id} deleted.`);
}

export const updateUser = (req, res) => {
    const {id} = req.params;
    const {F_name, L_name, age} = req.body;
    
    
    const user = users.find((user) => user.id === id);
    
    if(F_name) user.F_name = F_name;

    if(L_name) user.L_name = L_name;
    if(age) user.age = age;

    res.send(`User with id: ${id} has been updated`);
    
    
}