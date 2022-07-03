import express from "express";
import config from "config";
import connect from "./utils/connect";
import logger from "./utils/logger";
import routes from "./routes";
import cors from "cors";

const PORT = config.get<number>("port");


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.listen(PORT,()=>{
    logger.info(`server started on port ${PORT}`);
    connect();
    routes(app);
});