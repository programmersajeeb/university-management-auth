import express, { Application } from "express";
const app: Application = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send(`Hello world`);
});

export default app;
