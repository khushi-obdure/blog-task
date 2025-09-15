import express, { Request, Response } from 'express';
import cors from 'cors';
import blogRoutes from './routes/blogRoutes';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.get("/health", (req: Request, res: Response) => {
    res.send("Blog API is running...");
});

app.use('/', blogRoutes);

export default app;
