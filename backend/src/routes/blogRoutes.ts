import { Router } from "express";
import { getAllBlogs, searchBlogs } from "../controllers/blogController";

const router: Router = Router();

router.get("/", getAllBlogs);
router.get("/search", searchBlogs);

export default router;
