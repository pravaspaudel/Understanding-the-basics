import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/authrouter.js";

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

const url = process.env.CONNECTION_STRING;

app.use("/auth", router);

const startServer = async () => {
  try {
    await mongoose.connect(url);
    console.log(`data base connected successfully`);
    app.listen(PORT, () => {
      console.log(`app is listening on port no. ${PORT}`);
    });
  } catch (error) {
    console.log(`error while connecting to database ${error}`);
  }
};

startServer();
