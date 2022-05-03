import express from "express";
import { boardController } from "../../controllers/index.js";
import { boardValidation } from "../../validations/board.validation.js";

const router = express.Router();

router.route("/list")
    .get()
    .post(boardValidation.createNew, boardController.getList);

export const boardRouter = router;
