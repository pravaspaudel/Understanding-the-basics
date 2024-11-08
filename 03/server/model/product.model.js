import mongoose from "mongoose";

const sellProductSchema = new mongoose.Schema({
  productname: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const prouductmodel = mongoose.model("Product", sellProductSchema);

export default prouductmodel;
