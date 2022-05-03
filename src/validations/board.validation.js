import Joi from "joi";
import { boardModel } from "../models/board.model.js";
const createNew = async (req, res, next) => {
    // const condition = Joi.object({
    //     title: Joi.string().required().max(20).min(3),
    // });
    try {
        await boardModel.collectionShema.validateAsync(req.body, { abortEarly: false });
        next();
    } catch (error) {
        res.status(200).json({
            error: new Error(error).message,
        });
    }
};

export const boardValidation = {
    createNew,
};
