import express, { Router, Request, Response } from "express";
const app = express();
const route = Router();

app.use(express.json());
app.use(route);

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello World" });
});

export default app;
