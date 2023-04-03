const express = require("express");
const router = express.Router();

router.post("/webhook", (req, res) => {
  const event = req.body;

  console.log("Received Stripe webhook event:", event);

  res.sendStatus(200);
});

module.exports = router;