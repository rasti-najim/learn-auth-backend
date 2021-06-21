const Joi = require("joi");

function validateUser(req, res, next) {
  const schema = Joi.object({
    username: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(5).required(),
  });

  const result = schema.validate(req.body);
  if (result.error)
    return res.status(400).send(result.error.details[0].message);

  next();
}

module.exports = validateUser;
