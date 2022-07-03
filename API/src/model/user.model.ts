import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";


export interface UserDocument extends mongoose.Document {
    email: string;
    name: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    comparePassword(password:string):Promise<boolean>;
}

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{
    timestamps:true
});

userSchema.pre("save",async function(next){
    let user = this as UserDocument
    if(!user.isModified("password")){
        return next();
    }
    const hash = await bcrypt.genSalt(config.get("saltWorkFactor"));
    user.password = hash;
    return next();
});

userSchema.methods.comparePassword = async function(password:string):Promise<boolean>{
    let user = this as UserDocument
    const isMatch = await bcrypt.compare(password,user.password);
    return isMatch;
}
const User = mongoose.model<UserDocument>("User",userSchema);

export default User;