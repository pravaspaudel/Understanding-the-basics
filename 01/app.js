import express from "express";
import router from "./routes/tasks.js";
import connectDb from "./db/connect.js";
import cors from "cors";

const Port = process.env.PORT;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const startserver = async () => {
  try {
    await connectDb();
    app.listen(Port, () => {
      console.log(`app is listening on port ${Port}`);
    });
  } catch (e) {
    console.log(`error while connecting to db`);
  }
};

app.use(cors());
startserver();

app.use("/api/v1/tasks", router);
