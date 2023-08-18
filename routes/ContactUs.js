const express = require("express");
const router = express.Router();
const { ContactusFeedback } = require("../models");

router.post("/contact", async (req, res) => {
  try {
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
      Company,
    } = req.body;

    // if (!req.body) {

    const res12 = await ContactusFeedback.create({
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
      Company,
    });
    // }

    res.json({ res12 });
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
