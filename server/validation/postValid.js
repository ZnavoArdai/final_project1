const Joi = require("@hapi/joi");

const postValidation = (data) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    date: Joi.string().required(),
    image: Joi.string().required(),
    category: Joi.string().required(),
    user:Joi.required(),

  });

  return schema.validate(data);
};



module.exports.postValidation = postValidation;
