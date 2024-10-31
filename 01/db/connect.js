import mongoose from "mongoose";

const url = process.env.BASE_URL;

const connectDb = async () => {
  try {
    await mongoose.connect(url);
    console.log(`data base conneceted successfully `);
  } catch (e) {
    console.log(`error while connecting to db ${e}`);
  }
};

export default connectDb;
