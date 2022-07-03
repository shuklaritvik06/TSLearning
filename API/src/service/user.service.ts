import {DocumentDefinition} from "mongoose";
import { UserDocument } from "../model/user.model";
import {omit} from "lodash";
import User from "../model/user.model";
import bcrypt from "bcrypt";

export async function createUser(input: DocumentDefinition<Omit<UserDocument, 'createdAt'| 'updatedAt' | 'comparePassword'>>){
    try{
       return await User.create(input); 
    }catch(err: any){
        throw new Error(err);
    }
}

export async function validatePassword({email,password}){
    const user = await User.findOne({ email });
    if(!user){
        throw new Error("User not found");
    }
    const isValid = await user.comparePassword(password);
    if(!isValid){
        throw new Error("Invalid password");
    }
    return user;
}