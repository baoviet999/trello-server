import Joi from "joi";
import { getDb } from "../config/mongdb.js";

const cardCollectionName = "cards";
const cardSchema = Joi.object({
    title: Joi.string().required().min(3).max(20),
    createdAt: Joi.date().default(Date.now()),
    updatedAt: Joi.date().default(Date.now()),
    cover: Joi.string().default(null),
    columnId: Joi.string().required(),
    boardId: Joi.string().required(),
});

const validateCard = async (data) => {
    return await cardSchema.validateAsync(data);
};

const createNewCard = async (data) => {
    try {
        const newCard = await validateCard(data);
        const db = await getDb().collection(cardCollectionName);
        const result = await db.insertOne(newCard);
        const card = await db.findOne({ _id: result.insertedId });
        return card;
    } catch (error) {
        console.log(error);
    }
};

export const cardModel = {
    createNewCard,
};
