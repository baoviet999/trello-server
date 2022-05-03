import { columnModel } from "../models/column.model.js";
import Joi from "joi";
const createNew = async (req, res, next) => {
    try {
        await columnModel.columnSchema.validateAsync(req.body, { abortEarly: false });
        next();
    } catch (error) {
        res.status(500).json({
            message: "Error",
            error: error.message,
        });
    }
};

const update = async (req, res, next) => {
    const condition = Joi.object({
        title: Joi.string().max(20).min(3),
    });
    try {
        await condition.validateAsync(req.body, { abortEarly: false, allowUnknown: true });
        next();
    } catch (error) {
        throw new Error(error);
    }
};

export const columnValidation = {
    createNew,
    update,
};
