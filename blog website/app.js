import express from "express";
import mongoose from "mongoose";
import path from "path";
import cookieparser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const __dirname = path.resolve();
const app = express();
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(process.env.PORT);
    console.log("connected to db");
  });

app.use(cors());
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(cookieparser());
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index", {});
});
app.get("/login", (req, res) => {
  res.render("login", {});
});
app.post("/signUp", (req, res) => {
  res.render("signUp", {});
});
import { blogRouter } from "./routes/blogRoutes.js";
app.use("/api/v1/blog", blogRouter);
app.use("/api/v1/user", blogRouter);
