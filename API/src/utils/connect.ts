import mongoose from "mongoose";
import config from "config";
import logger from "./logger";

function connect(){
    const DB_URI = config.get<string>("dbUri");
    return mongoose.connect(DB_URI).then(()=>{
        logger.info(`connected to DB`);
    }).catch((err)=>{
        logger.error("Some Error occured while connecting to mongoDB",err);
        process.exit(1);
    });
}

export default connect;