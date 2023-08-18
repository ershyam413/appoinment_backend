const express = require("express");
const router = express.Router();
const { crousels } = require("../models");

router.post("/", async (req, res) => {
  const crousel = req.body;
  const title = req.user.title;
  crousel.title = title;
  await crousels.create(crousel);
  res.json(crousel);
});

router.delete("/:crouselId", async (req, res) => {
  const crouselId = req.params.crouselId;

  await crousels.destroy({
    where: {
      id: crouselId,
    },
  });

  res.json("DELETED SUCCESSFULLY!!!");
});

module.exports = router;
