import express from "express";
import { connectDb, getDb } from "./config/mongdb.js";
import { boardModel } from "./models/board.model.js";
import { connectRouter } from "./routers/v1/index.js";

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

    // middleware enable body parser
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    connectRouter(app);

    app.listen(PORT, hostname, () => console.log(`Connect at ${hostname} : ${PORT}`));
};
