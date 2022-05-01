import Joi from "joi";
import { getDb } from "../config/mongdb";

const columnCollectionName = "columns";
const columnSchema = Joi.object({
    title: Joi.string().required().max(20).min(3),
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
        const newColumn = await validateAsync(data);
        await getDb().collection(columnCollectionName).insertOne(newColumn);
    } catch (error) {
        console.log(error);
    }
};

export const columnModel = {
    createNew,
};
