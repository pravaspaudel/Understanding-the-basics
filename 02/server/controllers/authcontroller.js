import mongoose from "mongoose";
import express from "express";
import bcrypt from "bcrypt";
import userModel from "../model/user.model.js";

const signup = async (request, response) => {
  try {
    const { name, email, password } = request.body;
    const user = await userModel.findOne({ email });

    if (user) {
      return response.status(400).json({ msg: "user already exit" });
    }
    const userModel1 = new userModel({ name, email, password });
    userModel1.password = await bcrypt.hash(password, 10);
    await userModel1.save();

    response.status(201).json({ msg: "signup successfully" });
  } catch (error) {
    response.status(500).json({ msg: "error server " });
  }
};

const login = (request, response) => {
  response.send("thi is login one");
};

export { signup, login };
