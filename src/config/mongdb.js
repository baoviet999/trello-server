import { MongoClient } from "mongodb";
import { env } from "./env.js";

// tạo mongoDb client
const mongoClient = new MongoClient(env.CONNECT_STRING, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});
// khởi tạo 1 biến
let dbInstance = null;
//tạo hàm connect sau khi connect xong thì gán database cho biến db
export const connectDb = async () => {
    await mongoClient.connect();
    dbInstance = mongoClient.db(process.env.DATABASE_NAME);
};
// viết hàm lấy database
export const getDb = () => {
    if (!dbInstance) throw new Error("Need Connet first!!");
    return dbInstance;
};

