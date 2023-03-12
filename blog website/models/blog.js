import mongoose from "mongoose";
const Schema = mongoose.Schema;
const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const userData = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    blogs: [
      {
        type: Schema.Types.ObjectId,
        ref: "Blogs",
      },
    ],
  },
  { timestamps: true }
);

const Blogs = mongoose.model("Blogs", blogSchema);
const uData = mongoose.model("UserDatas", userData);

export { uData, Blogs };
