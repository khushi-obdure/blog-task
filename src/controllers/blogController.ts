import { Request, Response } from "express";

export const getAllBlogs = async (req: Request, res: Response): Promise<void> => {
    try {

        res.status(200).json({ success: true, data: [] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};
