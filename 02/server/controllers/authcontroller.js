import mongoose from "mongoose";
import express from "express";
import bcrypt from "bcrypt";
import userModel from "../model/user.model.js";
import jwt from "jsonwebtoken";

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

const login = async (request, response) => {
  try {
    const { email, password } = request.body;

    const userdatafromdb = await userModel.findOne({ email });

    if (!userdatafromdb) {
      return response.status(403).json({ msg: `email or password is wrong` });
    }

    const isPasswordEqual = await bcrypt.compare(
      password,
      userdatafromdb.password
    );

    if (!isPasswordEqual) {
      return response.status(403).json({ msg: `email or password is wrong` });
    }

    const SECRET_TOKEN = process.env.SECRET_TOKEN;

    const jwttoken = jwt.sign({ email }, SECRET_TOKEN, { expiresIn: "2h" });

    response.status(200).json({ token: jwttoken });
  } catch (e) {
    response.status(500).json({ msg: "server error" });
  }
};

export { signup, login };
