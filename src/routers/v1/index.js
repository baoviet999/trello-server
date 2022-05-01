import { boardRouter } from "./board.router.js";

export const connectRouter = (app) => {
    app.use("/board", boardRouter);
};
