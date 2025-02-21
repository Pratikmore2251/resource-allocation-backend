const express = require("express");
const { createBooking, cancelBooking } = require("../controllers/bookingController");
const router = express.Router();

router.post("/", createBooking);
router.delete("/:id", cancelBooking);

module.exports = router;
