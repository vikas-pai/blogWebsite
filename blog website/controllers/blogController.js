import { uData, Blogs } from "../models/blog.js";
import bcrypt from "bcrypt";
export const signUp = async (req, res, next) => {
  console.log("Adding new user");
  try {
    console.log(req.body);
    var { userName, password } = req.body;
    const salt = await bcrypt.genSalt(5);
    password = await bcrypt.hash(password, salt);
    const newdata = new uData({ userName, password });
    newdata.save().then((result) => {
      res.status(200).json({ "User added successfully!": result });
    });
  } catch (error) {
    next(error);
  }
};
export const login = async (req, res, next) => {
  console.log("Checking the user");
  try {
    console.log(req.body);
    var { userName, password } = req.body;
    const user = await uData.findOne({ userName: userName });
    if (user && bcrypt.compare(password, user.password)) {
      var x = user._id;
      res.status(200).json({ x });
    } else {
      res.status(200).json({ "Invalid credentials": user });
    }
  } catch (error) {
    next(error);
  }
};
export const writeblog = async (req, res, next) => {
  console.log("Updating blog");
  try {
    console.log(req.body);
    const { userId: id } = req.query;
    console.log(id);
    const { title, content } = req.body;
    const newblog = new Blogs({ title, content });
    var blogId;
    newblog
      .save()
      .then((result) => {
        console.log("New blog added:", result);
        blogId = result._id;
        return blogId;
      })
      .then(async (blogId) => {
        console.log(blogId);
        const user = await uData.findOne({ _id: id });
        console.log("User found:", user);
        user.blogs.push(blogId);
        console.log("New blog added to user:", user);
        user.save();
        res.status(200).json({ "Blog added successfully!": user });
      });
  } catch (error) {
    next(error);
  }
};
export const display = async (req, res, next) => {
  console.log("Displaying all blogs");
  try {
    const { userId: id } = req.query;
    console.log(id);
    var arr;
    const user = await uData.findOne({ _id: id });
    console.log("User found:", user);
    arr = user.blogs;
    console.log(arr);
    const blogs = await Blogs.find({ _id: { $in: arr } });
    console.log("Blogs found:", blogs);
    res.status(200).json({ "All Blogs": blogs });
  } catch (error) {
    next(error);
  }
};
