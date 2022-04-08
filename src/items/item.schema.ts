import * as mongoose from 'mongoose';

export const ItemSchema = new mongoose.Schema({
    username: String,
    password: String,
    phone: String,
    email: String,
});
