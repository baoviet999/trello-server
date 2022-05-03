import { columnModel } from "../models/column.model.js";

const createNew = async (data) => {
    try {
        const result = await columnModel.creteNewColumn(data);
        return result;
    } catch (error) {
        throw new Error(error);
    }
};

const update = async (id, data) => {
    try {
        const updateData = {
            ...data,
            updatedAt: Date.now(),
        };
        const result = await columnModel.update(id, updateData);
        return result;
    } catch (error) {}
};

export const columnService = {
    createNew,
    update,
};
