import mongoose from "mongoose";
import { type } from "os";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  readTime: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
  },

}, {timestamps: true});

const BlogModel = mongoose.models.blogs || mongoose.model("blogs", blogSchema);
export default BlogModel;
