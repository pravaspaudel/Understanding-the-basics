import userModel from "../model/user.model.js";
import bcrypt from "bcrypt";

const handlesignup = async (request, response) => {
  try {
    console.log(`request body is ${request.body}`);

    const { name, email, password } = request.body;

    // Ensure all fields are present
    if (!name || !email || !password) {
      return response.status(400).json({ message: `All fields are required` });
    }

    const saltround = 10;
    const hashedPassword = await bcrypt.hash(password, saltround);

    // Create a new user
    const user = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });
    console.log(user);

    // Send success response
    return response.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log(`Error: ${error.message}`);

    return response
      .status(500)
      .json({ message: `Error while creating user`, error: error.message });
  }
};

const handlelogin = (request, response) => {
  response.send(`This is login`);
};

export { handlelogin, handlesignup };
