const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { connectDatabase } = require("./database/database");
const Blog = require("./model/blogModel");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDatabase();

// GET API
app.get("/", (req, res) => {
  res.json({
    status: 200,
    message: "Success",
    data: "Hello World",
  });
});

// Create blog API
app.post("/createBlog", async (req, res) => {
//   console.log(req.body);

    const title = req.body.title;
    const subTitle = req.body.subTitle;
    const description = req.body.description;

    // Alternative (object destructuring)
    // const {title, subTitle, description} = req.body:


  // Insert into database
  await Blog.create({
    title: title,
    subTitle: subTitle,
    description: description,
  })

  res.json({
    status: 200,
    message: "Success",
  });
});

app.listen(3000, (req, res) => {
  console.log("server is running on port 3000");
});
