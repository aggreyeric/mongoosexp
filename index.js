require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const PORT = 5000;
const PostsRouter = require('./routes')

mongoose
  .connect(process.env.DB_CONNECTION, { useNewUrlParser: true })
  .then(function () {
    const app = express();
    app.use(express.json())
    app.use('/posts',PostsRouter )
    app.get("/", function (req, res) {
      res.send({
        message: "Hello express",
      });
    });

    app.listen(PORT, function () {
      console.log(` started the server  port ${PORT}`);
    });
  });
