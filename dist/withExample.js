"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import the necessary classes and interfaces from the correct path
const with_1 = require("./with");
console.log("");
console.log("*************** Uses Email Notification ***************");
// Example email usage
const emailNotificationService = new with_1.EmailNotificationService();
const userService = new with_1.UserServiceImpl(emailNotificationService);
const userController = new with_1.UserController(userService);
// Creating a user
const result = userController.createUser("John Doe", "john@example.com", "123456789");
console.log(result);
console.log("");
console.log("*************** Uses SMS Notification ***************");
// Example SMS usage
const smsNotificationService = new with_1.SMSNotificationService();
const userService2 = new with_1.UserServiceImpl(smsNotificationService);
const userController2 = new with_1.UserController(userService2);
// Creating a user
const result2 = userController2.createUser("Jane Doe", "jane@example.com", "123456789");
console.log(result2);
