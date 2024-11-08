import jwt from "jsonwebtoken";

const authenticateuser = (request, response, next) => {
  const token = request.header("Authorization")?.split(" ")[1];

  if (!token) {
    return response
      .status(401)
      .json({ message: "Access denied. No JWT token present." });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_TOKEN);

    request.user = decoded; //request.user is a custom property where you store the information of authenticated user after decoding the jwt

    // console.log(`This is the request user: ${JSON.stringify(request.user)}`);

    next();
  } catch (error) {
    return response.status(403).json({ message: "Invalid or expired token." });
  }
};

export default authenticateuser;
