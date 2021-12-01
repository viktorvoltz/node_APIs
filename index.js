import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose' ;


import usersRoutes from './routes/users.js';

const app = express();
const PORT = 3000;

async function connectToMongoDB() {
    await mongoose.connect('mongodb://localhost:27017/users');
    console.log(":: Connected to MongoDB server")
}
connectToMongoDB();

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/', (req, res) => {
    res.send('Home page');
});

app.listen(PORT, () => console.log(`server running on port: :: http://localhost:${PORT}`));
