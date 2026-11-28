import express from "express";
import cors from "cors";
import "dotenv/config";
import { stagesRouter } from "./routes/stages.routes.js";
import { errorHandler } from "./util/error.js";
import { stagesRouter } from "./routers/stages.router.js";
import { artistsRouter } from "./routers/artists.router.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/stages", stagesRouter);
app.use("/artists", artistsRouter);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});
