const express = require("express");
const CalculatorController = require("./controllers/CalculatorController");

const router = express.Router();

// Controllers
const calculatorController = new CalculatorController();

// Routes
router.get("/", calculatorController.renderHome);
router.post("/", calculatorController.renderResponse);

router.get("*", calculatorController.renderNotFound);

module.exports = router;
