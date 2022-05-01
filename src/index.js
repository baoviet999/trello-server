import express from "express";
import { connectDb, getDb } from "./config/mongdb.js";
import { boardModel } from "./models/board.model.js";

connectDb()
    .then(() => console.log("Connected!!!"))
    .then(() => bootServer())
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });

// đợi kết nối db thành công r thì mới khởi chạy server

const bootServer = () => {
    const app = express();
    const hostname = "localhost";
    const PORT = process.env.PORT || 9090;
    app.get("/test", async (req, res) => {
        res.send("<h1>Hoc node js</h1>");
    });
    app.listen(PORT, hostname, () => console.log(`Connect at ${hostname} : ${PORT}`));
};
