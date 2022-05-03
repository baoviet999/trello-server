import Joi from "joi";

const createCard = async (req, res, next) => {
    try {
        const condition = Joi.object({
            title: Joi.string().required().min(3).max(30).trim(),
            columnId: Joi.string().required(),
            boardId: Joi.string().required(),
        });
        await condition.validateAsync(req.body, { abortEarly: false , allowUnknown : true});
        next();
    } catch (error) {
        res.status(400).json({ message: "server error" });
    }
};
export const cardValidation = {
    createCard,
};
