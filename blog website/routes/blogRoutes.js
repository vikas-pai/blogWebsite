import express from "express";
import {
  writeblog,
  signUp,
  login,
  display,
} from "../controllers/blogController.js";
const router = express.Router();
router.route("/create/").post(writeblog);
router.route("/displayAll/").get(display);
router.route("/signUp").post(signUp);
router.route("/login").post(login);
export const blogRouter = router;
