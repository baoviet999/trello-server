import Joi from "joi";
import { getDb } from "../config/mongdb.js";

const colectionName = "boards";
const collectionShema = Joi.object({
    title: Joi.string().required().max(20).min(3),
    columnOrder: Joi.array().items(Joi.string()).default([]),
    createdAt: Joi.date().default(Date.now()),
    updatedAt: Joi.date().default(null),
    _detroy: Joi.boolean().default(false),
});

const validateSchema = async (data) => {
    return await collectionShema.validateAsync(data, {
        abortEarly: false,
    });
};

const createNew = async (data) => {
    try {
        const newValue = await validateSchema(data);
        const result = await getDb().collection(colectionName).insertOne(newValue);
        const a = getDb().collection(colectionName).findOne({ _id: result.insertedId });
        return a;
    } catch (error) {
        throw new Error(error);
    }
};

export const boardModel = {
    createNew,
};
