"use strict";

const serviceLocator = require("../lib/service_locator");
const mongoose = serviceLocator.get("mongoose");
let userSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            required: [true, "userName is required"],
        },
        phoneNumber: {
            type: Number,
            required: [true, "phoneNumber is required"],
        },
        emailId: {
            type: String,
            required: [true, "emailId is required"],
        },
        address: {
            type: String,
            required: [true, "address is required"],
        },
        userId: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("userDetails", userSchema, "userDetails");