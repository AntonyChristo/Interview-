"use strict";

const serviceLocator = require("../../lib/service_locator");
const joi = serviceLocator.get("joi");
module.exports = joi.object({
    userId: joi.string().required(),
    userName: joi.string().optional(),
    phoneNumber: joi.number().optional(),
    emailId: joi.string().optional(),
    address: joi.string().optional(),
});