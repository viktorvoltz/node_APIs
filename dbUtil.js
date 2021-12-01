import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({

    F_name: {
        type: String,
        required: true,
    },
    L_name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    }

});

const users = mongoose.model('user', userSchema)

let testing = {};


testing.createuser = async (data) => {
    return await new users(data).save();
}

testing.getAllusers = async () => {
    return await users.find({});
}

testing.getOneuser = async (usersId) => {
    const users = await users.findOne({ _id: usersId });
    if (!users) throw new Error("users does not exists");

    return users
}

testing.updateuser = async (usersId, data) => {
    const users = await users.findByIdAndUpdate(
        { _id: usersId },
        { $set: data }
    );

    if (!users) throw new Error("users dosen't exist", 404);

    return users;
}

testing.deleteuser = async (usersId) => {
    const users = await users.findOne({ _id: usersId });
    users.remove()
    return users
}

export default testing;