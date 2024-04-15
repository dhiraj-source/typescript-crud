import blogModel,{ Blog } from "../../models/blogModel";
import mongoose from "mongoose";
import { Request, Response } from "express";

const DeleteBlogs = async (req:Request, res:Response) => {
    try {
      const { id } = req.params;
      const blog: Blog | null = await blogModel
        .findByIdAndDelete(id)
        .populate("user");

      if (!blog) {
        return res.status(404).send({
          success: false,
          message: "Blog not found",
        });
      }

    //   await blog.user.blogs.pull(blog);
    //   await blog.user.save();

      return res.status(200).send({
        success: true,
        message: "Post deleted successfully",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        message: `Error while deleting post`,
        success: false,
        error,
      });
    }
};
export default DeleteBlogs;
