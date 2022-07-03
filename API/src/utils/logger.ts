import pino from "pino";
import pretty from "pino-pretty";

const now = new Date();
export default pino({
    transport: {
        target: 'pino-pretty',
        options: {
          colorize: true
        }
    }
});
