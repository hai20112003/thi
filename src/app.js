import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bookRouter from "./routers/books";
import authRouter from "./routers/auth";
const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', bookRouter);
app.use('/api', authRouter);


mongoose.connect(`mongodb://127.0.0.1:27017/bai-thi2`);

export const viteNodeApp = app;
