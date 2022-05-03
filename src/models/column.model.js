import Joi from "joi";
import { getDb } from "../config/mongdb.js";
import { ObjectId } from "mongodb";
const columnCollectionName = "columns";
const columnSchema = Joi.object({
    boardId: Joi.string().required(),
    title: Joi.string().required().max(20).min(3).trim(),
    cardOrder: Joi.array().items(Joi.string).default([]),
    createdAt: Joi.date().default(Date.now()),
    updatedAt: Joi.date().default(null),
    _detroy: Joi.boolean().default(false),
});

const validateColumnSchema = async (data) => {
    return await columnSchema.validateAsync(data);
};

const creteNewColumn = async (data) => {
    try {
        // thằng này cần validate để lấy ra những thằng defaut lúc tạo
        const newColumn = await validateColumnSchema(data);
        const result = await getDb().collection(columnCollectionName).insertOne(newColumn);
        const a = getDb().collection(columnCollectionName).findOne({ _id: result.insertedId });
        return a;
    } catch (error) {
        throw new Error(error);
    }
};

const update = async (id, data) => {
    console.log({ id, data });
    try {
        // nhớ bọc cái id lại để mongodb hiểu
        const result = await getDb()
            .collection(columnCollectionName)
            .findOneAndUpdate({ _id: ObjectId(id) }, { $set: data }, { returnNewDocument: true });
        console.log("aaaaa", result);
        return result.value;
    } catch (error) {}
};

export const columnModel = {
    columnSchema,
    creteNewColumn,
    update,
};
