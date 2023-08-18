const express = require("express");
const router = express.Router();

router.post("/contact", async (req, res) => {
  const {
    Name,
    Title,
    Address,
    City,
    State,
    Zip,
    Phone,
    Email,
    companyWebsite,
    helpCat,
    helpDesc,
  } = req.body;
  if (!req.body) {
    res.send("Incomplete body");
  }

  res.json(comment);
});

module.exports = router;
