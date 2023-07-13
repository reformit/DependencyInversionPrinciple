"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const without_1 = require("./without");
// Usage example
const controller = new without_1.UserController();
const result = controller.createUser("John Doe", "john@example.com", "1234567890");
console.log(result);
