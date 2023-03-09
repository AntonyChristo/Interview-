"use strict";

const serviceLocator = require("../lib/service_locator");
const config = require("./configs")();

serviceLocator.register("logger", () => {
  return require("../lib/logger").create(config.application_logging);
});

serviceLocator.register("joi", () => {
  return require("joi");
});

serviceLocator.register("jsend", () => {
  return require("../lib/jsend");
});

serviceLocator.register("failAction", () => {
  return require("../lib/failAction").verify;
});

serviceLocator.register("trimRequest", () => {
  return require("../utils/trimRequest").all;
});

serviceLocator.register("mongoose", () => {
  return require("mongoose");
});

serviceLocator.register("fs", () => {
  return require("fs");
});

serviceLocator.register("path", () => {
  return require("path");
});

serviceLocator.register("_", () => {
  return require("underscore");
});

serviceLocator.register("glob", () => {
  return require("glob");
});

serviceLocator.register("UserProfile", (serviceLocator) => {
  const UserProfile = require("../services/userProfile");
  return new UserProfile();
});

module.exports = serviceLocator;
