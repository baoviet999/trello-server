import { boardService } from "../services/board.services.js";

const getList = async (req, res) => {
    try {
        const result = await boardService.createNew(req.body);
        res.json({
            result,
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

export const boardController = {
    getList,
};
