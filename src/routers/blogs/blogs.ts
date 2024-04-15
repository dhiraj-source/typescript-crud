import express from "express"

const router = express.Router();

//controller
import CreateBlogs from "../../controllers/blogs/CreateBlogs";
import GetAllBlogs from "../../controllers/blogs/GetAllBlogs"
import UpdateBlogs from "../../controllers/blogs/UpdateBlogs"
import DeleteBlogs from "../../controllers/blogs/DeleteBlogs";


router.post("/create-blog", CreateBlogs);

// GET || ALL BLOGS
router.get("/all-blogs", GetAllBlogs)

// PUT || UPDATE BLOGS
router.put("/update-blog/:id", UpdateBlogs)

// DELETE || DELETE BLOGS
router.delete("/delete-blog/:id", DeleteBlogs)


export default router