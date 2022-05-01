import express from "express";

const app = express();

const hostname = "localhost";
const PORT = process.env.PORT || 9090;

app.get("/", (req, res) => {
    res.send("<h1>hello</h1>");
});

app.listen(PORT, hostname, () => console.log(`Connect at ${hostname} : ${PORT}`));
