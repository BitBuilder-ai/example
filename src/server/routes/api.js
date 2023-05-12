const express = require("express");
const router = express.Router();

const stripeWebhookRouter = require("./stripeWebhook");

/* GET users listing. */
router.get("/users", function(req, res, next) {
  console.log('get "users" route hit');
  res.send({ users: ["joe", "bernie", "tulsi", "donald", "bill"] });
});

// Add Stripe webhook router
router.use("/stripe", stripeWebhookRouter);

module.exports = router;