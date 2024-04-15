import { Request, Response } from "express";
import blogModel ,{Blog} from "../../models/blogModel";
const GetAllBlogs = async (req: Request, res: Response) => {
    try {
        const blogs: Blog[] = await blogModel.find({}).populate('user');
        if (!blogs || blogs.length === 0) {
            return res.status(200).send({
                success: false,
                message: "No blogs found"
            });
        }
        return res.status(200).send({
            success: true,
            blogCount: blogs.length,
            message: "All blogs lists",
            blogs
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: `Error in getting all blogs`,
            success: false,
            error
        });
    }
};
export default GetAllBlogs;
