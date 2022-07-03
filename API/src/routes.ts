import { Express,Request,Response } from "express";
import validate from "./middleware/validateResource";
import { createUserHandler } from "./controller/user.controller";
import { createUserSchema } from "./schema/user.schema";

export default function routes(app: Express){
    app.get("/healthcheck",(req: Request,res: Response) => {
        res.status(200).json({status: "ok"});
    });
    app.post("/api/user",validate(createUserSchema),createUserHandler);
}