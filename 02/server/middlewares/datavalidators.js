import Joi from "joi";

const signupvalidation = (request, response, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(100).required(),
  });

  const { error } = schema.validate(request.body);
  if (error) {
    return response
      .status(400)
      .json({ msg: `Validation error: ${error.details[0].message}` });
  }

  next();
};

const loginvalidation = async (request, response, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(100).required(),
  });

  const { error } = schema.validate(request.body);

  if (error) {
    return response
      .status(400)
      .json({ msg: `Validation error: ${error.details[0].message}` });
  }

  next();
};

export { signupvalidation, loginvalidation };
