"use strict";

const serviceLocator = require("../../lib/service_locator");
const joi = serviceLocator.get("joi");
module.exports = joi.object({
    userName: joi.string().required(),
    phoneNumber: joi.number().required(),
    emailId: joi.string().required(),
    address: joi.string().required(),
});