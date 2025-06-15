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
  });

  res.json({
    status: 200,
    message: "Success",
  });
});

app.get("/blogs", async (req, res) => {
  // fetching data from database
  const blogs = await Blog.find();

  // check if blogs contains data or not
  if (blogs.length === 0) {
    res.json({
      status: 404,
      message: "No data found",
    });
  } else {
    res.json({
      status: 200,
      message: "Success",
      data: blogs,
    });
  }
});

// GET API - /blogs/:id (single API)
app.get("/blogs/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  // const {id} = req.params // alternative
  const blog_data = await Blog.find({ _id : id })
  // const blog_data = await Blog.findById(id);
  if (blog_data.length == 0) {
    res.status(404).json({
      message: "No data found with this id"
    });
  } else {
    res.status(200).json({
      message: "got data",
      data: blog_data,
    });
  }
});

app.listen(3000, (req, res) => {
  console.log("server is running on port 3000");
});
