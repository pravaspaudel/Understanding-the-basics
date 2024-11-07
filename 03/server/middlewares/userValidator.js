import Joi from "joi";

const signupvalidator = (request, response, next) => {
  const schema = Joi.object({
    name: Joi.string()
      .min(3)
      .max(15)
      .regex(/^[a-zA-Z\s]+$/)
      .required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  });

  const { error } = schema.validate(request.body);

  if (error) {
    return response
      .status(400)
      .json({ message: `Error: ${error.details[0].message}` });
  }

  next();
};

const loginvalidator = (request, response, next) => {
  const loginschema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required().min(8),
  });

  const { error } = loginschema.validate(request.body);
  if (error) {
    return response
      .status(400)
      .json({ message: `Error: ${error.details[0].message}` });
  }

  next();
};

export { signupvalidator, loginvalidator };
