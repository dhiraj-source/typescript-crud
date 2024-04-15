import { Request, Response } from "express";
import userModel from "../../models/userModel";
import blogModel, { Blog } from "../../models/blogModel";

const CreateBlogs = async (req: Request, res: Response) => {
  try {
    const { title, description, image, user } = req.body as {
      title: string;
      description: string;
      image: string;
      user: string;
    };

    if (!title || !description || !user) {
      return res.status(400).send({
        message: `Please provide all fields`,
        success: false,
      });
    }
    const existingUser = await userModel.findById(user);
    if (!existingUser) {
      return res.status(404).send({
        success: false,
        message: "Unable to find user",
      });
    }
    const newBlog: Blog = new blogModel({ title, description, image, user });

    // const session = await mongoose.startSession();
    // session.startTransaction();

    // await newBlog.save({ session });
    // existingUser.blogs.push(newBlog);
    // await existingUser.save({ session });

    // await session.commitTransaction();
    // await session.endSession();

    newBlog.save()

    return res.status(201).send({
      success: true,
      message: "Blog created",
      newBlog,
    });
  } catch (error: any) {
    console.log(error);
    return res.status(500).send({
      message: `Error in creating blog`,
      success: false,
      error,
    });
  }
};
export default CreateBlogs;
