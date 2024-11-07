import mongoose from "mongoose";
const connectionString = process.env.CONNECTION_STRING;

export const connectdb = async () => {
  try {
    await mongoose.connect(connectionString);
    console.log(`connected to db`);
  } catch (error) {
    console.log(`error while connecting to database ${error}`);
  }
};
