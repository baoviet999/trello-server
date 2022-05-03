import { columnService } from "../services/column.services.js";

const createNew = async (req, res) => {
    try {
        const result = await columnService.createNew(req.body);
        console.log("result: ", result);
        res.json({
            message: "Create new cloumn success!!!",
            result,
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

const update = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await columnService.update(id, req.body);
        res.json({
            message: "Update success!!",
            result,
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

export const columnController = {
    createNew,
    update,
};
