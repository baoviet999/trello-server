import express from "express";
import { a } from "./routers/v1/rou.js";

const app = express();

const hostname = "localhost";
const PORT = process.env.PORT || 9090;

app.get("/", (req, res) => {
    res.send("<h1>Hoc node js</h1>");
});
a()
app.listen(PORT, hostname, () => console.log(`Connect at ${hostname} : ${PORT}`));
