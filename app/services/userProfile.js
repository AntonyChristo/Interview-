"use strict";
const serviceLocator = require("../lib/service_locator");
const mongoose = serviceLocator.get("mongoose");
const jsend = serviceLocator.get("jsend");
const userDetails = mongoose.model("userDetails");
const _ = serviceLocator.get("_");
const { v4: uuidv4 } = require('uuid');

class USERPROFILE {
    async createUserProfileDetails(req, res) {
        try {
            let createUserProfile = new userDetails(req.payload);
            createUserProfile.userId = uuidv4();
            createUserProfile = await createUserProfile.save();
            return jsend(200, "Successfully user profile details was created", createUserProfile)
        } catch (e) {
            console.log(e);
            res.notAcceptable(e);
        }
    }
    async findUserProfileDetails(req, res) {
        try {
            let findUserProfile = await userDetails.findOne({ userId: req.query.userId });
            if (findUserProfile) {
                return jsend(200, "User profile detail successfully find", findUserProfile);
            } else {
                return jsend(400, "Failed to find user profile detail");
            }
        } catch (e) {
            console.log(e);
            res.notAcceptable(e);
        }
    }
    async findAllUserProfileDetails(req, res) {
        try {
            let findAllUserProfile = await userDetails.find();
            if (findAllUserProfile) {
                return jsend(200, "User profile detail successfully fetched", findAllUserProfile);
            } else {
                return jsend(200, "Failed to fetched user profile detail");
            }
        } catch (e) {
            console.log(e);
            res.notAcceptable(e);
        }
    }

    async updateUserProfile(req, res) {
        try {
            let findUserProfile = await userDetails.findOne({ userId: req.payload.userId });
            if (findUserProfile) {
                _.each(Object.keys(req.payload), (key) => {
                    findUserProfile[key] = req.payload[key];
                });
                const saved = await findUserProfile.save();
                const updateUserProfile = await userDetails.findOne({ userId: req.payload.userId });
                return jsend(200, "User profile detail successfully updated", updateUserProfile);
            } else {
                return jsend(400, "Failed to update user profile detail")
            }
        } catch (e) {
            console.log(e);
            res.notAcceptable(e);
        }
    }

    async deleteUserProfile(req, res) {
        try {
            let findUserProfile = await userDetails.findOne({ userId: req.payload.userId });
            if (findUserProfile) {
                let deleteUserProfile = await userDetails.deleteOne({ userId: req.payload.userId });
                return jsend(200, "User profile detail successfully deleted");
            } else {
                return jsend(400, "Failed to find user profile detail");
            }
        } catch (e) {
            console.log(e);
            res.notAcceptable(e);
        }
    }
};
module.exports = USERPROFILE