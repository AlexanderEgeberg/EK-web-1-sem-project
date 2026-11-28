import cors from "cors";
import "dotenv/config";
import { errorHandler } from "./util/error.js";
import { stagesRouter } from "./routers/stages.router.js";
import { artistsRouter } from "./routers/artists.router.js";
import { concertsRouter } from "./routers/concerts.router.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/stages", stagesRouter);
app.use("/artists", artistsRouter);
app.use("/concerts", concertsRouter);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});
