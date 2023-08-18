const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
const port = process.env.PORT || 8000;
const db = require("./models");
require("dotenv").config();
// Routers
const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);
const commentsRouter = require("./routes/Comments");
app.use("/comments", commentsRouter);
const usersRouter = require("./routes/Users");
const crouselsRouter = require("./routes/crousels");
app.use("/crousels", crouselsRouter);
const usersRouter = require("./routes/Users");
app.use("/auth", usersRouter);

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
  });
});
