import express from "express";
import cors from "cors";
import "dotenv/config";
import { stagesRouter } from "./routes/stages.routes.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/stages", stagesRouter);

app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});
