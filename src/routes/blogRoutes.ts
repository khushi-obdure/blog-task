import { Router } from "express";
import { getAllBlogs } from "../controllers/blogController";

const router: Router = Router();

router.get("/", getAllBlogs);

export default router;
