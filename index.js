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
const Blogsrouter = require("./routes/Blogs");
const servicesrouter = require("./routes/Services");
const Resourcerouter = require("./routes/Resource");

app.use("/home", HomeCarouselRouter);
app.use("/blogs", Blogsrouter);
app.use("/services", servicesrouter);
app.use("/resources", Resourcerouter);
//Home routes

app.listen(port, () => {
  try {
    console.log(`Server running on port http://localhost:${port}`);
  } catch (error) {
    console.log(error);
  }
});
// });
