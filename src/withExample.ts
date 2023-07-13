// Import the necessary classes and interfaces from the correct path
import {
  UserController,
  UserServiceImpl,
  IUserService,
  EmailNotificationService,
  SMSNotificationService,
  INotificationService,
} from "./with";

console.log("");
console.log("*************** Uses Email Notification ***************");
const emailNotificationService: INotificationService =
  new EmailNotificationService();
const userService: IUserService = new UserServiceImpl(emailNotificationService);
const userController = new UserController(userService);

// Creating a user
const result = userController.createUser(
  "John Doe",
  "john@example.com",
  "123456789"
);

console.log(result);

console.log("");
console.log("*************** Uses SMS Notification ***************");
const smsNotificationService: INotificationService =
  new SMSNotificationService();
const userService2: IUserService = new UserServiceImpl(smsNotificationService);
const userController2 = new UserController(userService2);

// Creating a user
const result2 = userController2.createUser(
  "Jane Doe",
  "jane@example.com",
  "123456789"
);
console.log(result2);
