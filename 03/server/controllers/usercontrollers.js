import userModel from "../model/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const handlesignup = async (request, response) => {
  try {
    console.log(`Request body is ${JSON.stringify(request.body)}`);

    const { name, email, password } = request.body;

    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return response.status(400).json({ message: "User already exists" });
    }

    if (!name || !email || !password) {
      return response.status(400).json({ message: "All fields are required" });
    }

    const saltround = 10;
    const hashedPassword = await bcrypt.hash(password, saltround);

    const user = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });
    console.log(user);

    return response.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log(`Error: ${error.message}`);
    return response
      .status(500)
      .json({ message: "Error while creating user", error: error.message });
  }
};

const handlelogin = async (request, response) => {
  const { email, password } = request.body;

  if (!email || !password) {
    console.log("All fields are required");
    return response.status(400).json({ message: "All fields are required" });
  }

  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return response.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      const token = jwt.sign(
        { email: user.email, id: user._id },
        process.env.SECRET_TOKEN,
        {
          expiresIn: "2h",
        }
      );
      return response.status(200).json({ token, message: "Login successful" });
    } else {
      return response.status(401).json({ message: "Invalid password" });
    }
  } catch (error) {
    console.log(`Error: ${error.message}`);
    return response
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

const handleShop = (request, response) => {
  response.json({ message: "this is protected route" });
};

export { handlelogin, handlesignup, handleShop };
