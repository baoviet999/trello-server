import { MongoClient } from "mongodb";
import { env } from "./env.js";

const mongoClient = new MongoClient(env.CONNECT_STRING, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

export const connectDb = async () => {
    try {
        // Connect to server
        await mongoClient.connect();
        await getListData();
        console.log("Connect success");
    } finally {
        // close connection khi thanh cong hoac loi
        await mongoClient.close();
    }
};

const getListData = async () => {
    const dada = await mongoClient.db().admin().listDatabases();
    console.log(dada);
};
