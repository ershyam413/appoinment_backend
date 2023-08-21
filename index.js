const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
const port = process.env.PORT || 8000;
const db = require("./models");
require("dotenv").config();
// Router

//Home routes
const HomeCarouselRouter = require("./routes/HomeCarousel");

const ContactUsRouter = require("./routes/ContactUs");
app.use("/home", HomeCarouselRouter);
app.use("/contact", ContactUsRouter);

//Home routes
db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
  });
});
