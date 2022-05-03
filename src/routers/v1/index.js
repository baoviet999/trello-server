import { boardRouter } from "./board.router.js";
import { columnRouter } from "./column.router.js";
import { cardRouter } from "./card.router.js";

export const connectRouter = (app) => {
    app.use("/board", boardRouter);
    app.use('/column', columnRouter)
    app.use('/card' , cardRouter)
};
