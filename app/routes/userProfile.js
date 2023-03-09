"use strict";

const serviceLocator = require("../lib/service_locator");
const failAction = serviceLocator.get("failAction");
const UserProfile = serviceLocator.get("UserProfile");

exports.routes = (server, serviceLocator) => {
    return server.route([
        {
            path: "/PROJECT/createUserProfileDetails",
            method: "POST",
            handler: UserProfile.createUserProfileDetails,
            options: {
                auth: false,
                validate: {
                    payload: require('../validations/userProfile/createUserProfile'),
                    failAction: failAction
                }
            },
        },
        {
            path: "/PROJECT/findUserProfileDetails",
            method: "GET",
            handler: UserProfile.findUserProfileDetails,
            options: {
                auth: false,
                validate: {
                    query: require('../validations/userProfile/findUserProfile'),
                    failAction: failAction
                }
            },
        },
        {
            path: "/PROJECT/findAllUserProfileDetails",
            method: "GET",
            handler: UserProfile.findAllUserProfileDetails,
            options: {
                auth: false,
            },
        },
        {
            path: "/PROJECT/updateUserProfile",
            method: "PUT",
            handler: UserProfile.updateUserProfile,
            options: {
                auth: false,
                validate: {
                    payload: require('../validations/userProfile/updateUserProfile'),
                    failAction: failAction
                }
            },
        },
        {
            path: "/PROJECT/deleteUserProfile",
            method: "DELETE",
            handler: UserProfile.deleteUserProfile,
            options: {
                auth: false,
                validate: {
                    payload: require('../validations/userProfile/deleteUserProfile'),
                    failAction: failAction
                }
            },
        },
    ])
}