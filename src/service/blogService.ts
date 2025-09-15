import https from "https";
import { ApiOptions } from "../interface/fetchBlogOptions";
import { BlogResponse } from "../interface/blogResponse";

export const fetchBlogs = ({ method = "GET", path }: ApiOptions): Promise<any> => {
    console.log('Rapid API Path:', path);

    const options = {
        method,
        hostname: process.env.RAPIDAPI_HOST!,
        path,
        headers: {
            "x-rapidapi-key": process.env.RAPIDAPI_KEY!,
            "x-rapidapi-host": process.env.RAPIDAPI_HOST!,
        },
    };

    return new Promise((resolve, reject) => {
        const req = https.request(options, (res) => {
            const chunks: Uint8Array[] = [];

            res.on("data", (chunk) => chunks.push(chunk));
            res.on("end", () => {
                try {
                    const body = Buffer.concat(chunks).toString();
                    const parsed = JSON.parse(body) as BlogResponse;
                    resolve(parsed);
                } catch (err) {
                    reject(new Error("Failed to parse API response"));
                }
            });
        });

        req.on("error", reject);
        req.end();
    });
};
