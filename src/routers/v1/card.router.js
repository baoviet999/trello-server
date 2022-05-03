import express from "express";
import { cardController } from "../../controllers/card.controller.js";
import { cardValidation } from "../../validations/card.validation.js";

const router = express.Router();

router.post("/", cardValidation.createCard, cardController.createCard);

export const cardRouter = router;
