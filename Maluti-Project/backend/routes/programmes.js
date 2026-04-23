const express = require("express");
const router = express.Router();

const { getProgrammes } = require("../controllers/programmesController");

router.get("/", getProgrammes);

module.exports = router;  