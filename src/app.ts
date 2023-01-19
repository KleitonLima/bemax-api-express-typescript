import express, { Router, Request, Response } from "express";
const app = express();
const port = 3000;
const route = Router();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello Wolrd" });
});

app.use(route);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
