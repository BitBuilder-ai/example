const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/users", function(req, res, next) {
  console.log('get "users" route hit');
  res.send({
    users: [
      {
        "first": "joe",
        "last": "johnson"
      },
      {
        "first": "bernie",
        "last": "brooks"
      },
      {
        "first": "tulsi",
        "last": "thompson"
      },
      {
        "first": "donald",
        "last": "davis"
      },
      {
        "first": "bill",
        "last": "baker"
      }
    ]
  });
});

module.exports = router;
