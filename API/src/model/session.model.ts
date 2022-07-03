import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";
import { UserDocument } from "./user.model";

export interface SchemaDocument extends mongoose.Document {
    user: UserDocument['_id'];
    valid: boolean;
    createdAt: Date;
    updatedAt: Date;
    userAgent: string;
}

const sessionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    valid:{
        type:Boolean,
        default:true
    },
    userAgent: {
        type: String,
    }
});

const Session = mongoose.model("Session",sessionSchema);

export default Session;