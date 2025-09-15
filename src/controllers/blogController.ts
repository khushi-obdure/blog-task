import { Request, Response } from "express";
import { fetchBlogs } from "../service/blogService"
import { successResponse, errorResponse } from "../exceptions/responseFormat";
import { message } from "../utils/message"

const getAllBlogs = async (req: Request, res: Response): Promise<void> => {
    try {
        console.log('Inside Get All Blogs Function')
        const page = parseInt((req.query.page as string) || '1');
        const limit = parseInt((req.query.limit as string) || '10');

        const data = await fetchBlogs({ path: '/business?lr=en-US' });
        let paginatedBlog: any[] = [];
        console.log('Data:', data)

        if (data) {
            const blogs = data.items || [];
            const startIndex = (page - 1) * limit;
            const endIndex = page * limit;
            paginatedBlog = blogs.slice(startIndex, endIndex);
        }

        successResponse(res, 200, message.success.fetchBlogs, paginatedBlog);
    } catch (error) {
        console.error(error);
        errorResponse(res, 500, message.error.serverError, []);
    }
};

const searchBlogs = async (req: Request, res: Response): Promise<void> => {
    try {
        const data = await fetchBlogs({ path: `/search?keyword=${req.query.keyword}` });
        console.log('Data:', data)
        const blogs = data?.items ?? [];

        successResponse(res, 200, message.success.fetchBlogs, blogs);
    } catch (error) {
        console.error(error);
        errorResponse(res, 500, message.error.serverError, []);
    }
};

export { getAllBlogs, searchBlogs };

