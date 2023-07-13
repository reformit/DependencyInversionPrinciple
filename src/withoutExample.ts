import { UserController } from "./without";

// Usage example
const controller = new UserController();
const result = controller.createUser(
  "John Doe",
  "john@example.com",
  "1234567890"
);
console.log(result);
