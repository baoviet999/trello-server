import express from "express";
import { columnController } from "../../controllers/column.controller.js";
import { columnValidation } from "../../validations/column.validation.js";
const router = express.Router();

router.post("/", columnValidation.createNew, columnController.createNew);
router.put("/:id", columnValidation.update, columnController.update);
export const columnRouter = router;
