import { cardServices } from "../services/card.servicers.js";

const createCard = async (req, res) => {
    try {
        const result = await cardServices.createCard(req.body);
        res.json({
            message: "Create success",
            result,
        });
    } catch (error) {
        req.status(500).json({ message: error.message });
    }
};
export const cardController = {
    createCard,
};
