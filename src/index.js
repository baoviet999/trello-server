import express from "express";
import { connectDb } from "./config/mongdb.js";
import dotEnv from "dotenv";

dotEnv.config();
const app = express();

const hostname = "localhost";
const PORT = process.env.PORT || 9090;

connectDb().catch(console.log);

app.get("/", (req, res) => {
    res.send("<h1>Hoc node js</h1>");
});

app.listen(PORT, hostname, () => console.log(`Connect at ${hostname} : ${PORT}`));
