import { Document } from 'mongoose';

export interface Item extends Document {
    readonly username: string;
    readonly password: string;
    readonly phone: string;
    readonly email: string;
}
