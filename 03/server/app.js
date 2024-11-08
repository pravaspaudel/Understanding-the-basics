import express from "express";
import "dotenv/config";
import { connectdb } from "./db/connectdb.js";
import router from "./routes/userroute.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const Port = process.env.PORT;

app.use("/api", router);

const start = async () => {
  try {
    await connectdb();

    app.listen(Port, () => {
      console.log(`app is listening on port no. ${Port}`);
    });
  } catch (e) {
    console.log("error ", e);
  }
};

start();
