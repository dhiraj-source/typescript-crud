import mongoose from "mongoose";
import { Request,Response } from "express";
import blogModel ,{Blog} from "../../models/blogModel";

const UpdateBlogs = async (req:Request,res:Response) => {
 try {
   const { id } = req.params;
   const blog: Blog | null = await blogModel.findByIdAndUpdate(id, req.body, {
     new: true,
   });
   if (!blog) {
     return res.status(404).send({
       success: false,
       message: "Blog not found",
     });
   }
   return res.status(200).send({
     success: true,
     message: "Blog updated",
     blog,
   });
 } catch (error) {
   console.log(error);
   return res.status(500).send({
     message: `Error in updating blog`,
     success: false,
     error,
   });
 }

};
export default UpdateBlogs;
