import dotenv from 'dotenv';
dotenv.config();
export default{
    port: 8000,
    host: "localhost",
    dbUri: `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.aeiaykn.mongodb.net/?retryWrites=true&w=majority`,
    saltWorkFactor: 10,
    accessTokenTtl: "15m",
    refreshTokenTtl: "30d",
}