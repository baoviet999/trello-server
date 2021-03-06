import { boardModel } from "../models/board.model.js";

const createNew = async (data) => {
    try {
        const result = await boardModel.createNew(data);
        console.log("result: ", result);
        return result
    } catch (error) {
        throw new Error(error);
    }
};

export const boardService = {
    createNew,
};
