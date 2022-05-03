import { cardModel } from "../models/card.model.js";

const createCard = async (data) => {
    try {
        const result = await cardModel.createNewCard(data);
        return result;
    } catch (error) {}
};

export const cardServices = {
    createCard,
};
