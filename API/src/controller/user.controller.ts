import { Request,Response } from "express";
import { CreateUserInput } from "../schema/user.schema";
import { createUser } from "../service/user.service";
import logger from "../utils/logger";

export async function createUserHandler(req:Request<{},{},CreateUserInput['body']>, res:Response){
    try{
      const user = await createUser(req.body);
      res.json(user);
    }catch(err){
        logger.error("error in creating user",err);
        res.status(409).json({error: err.message});
    }
}