import express, { Router, Request, Response } from "express";
import cors from 'cors'

const app = express();
const route = Router();

app.use(express.json());
app.use(route);
app.use(cors())

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello World" });
});

export default app;
