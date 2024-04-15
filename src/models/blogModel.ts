import mongoose, { Document, Schema } from "mongoose";

export interface Blog extends Document {
  title: string;
  description: string;
  image?: string;
  user: mongoose.Types.ObjectId;
}

const blogSchema = new Schema<Blog>(
  {
    title: {
      type: String,
      required: [true, "title reuired"],
    },
    description: {
      type: String,
      required: [true, "description required"],
    },
    image: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "user id is required"],
    },
  },
  { timestamps: true }
);

const blogModel = mongoose.model<Blog>("Blog", blogSchema);

export default blogModel;
