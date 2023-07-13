"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = exports.UserServiceImpl = exports.SMSNotificationService = exports.EmailNotificationService = void 0;
class User {
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
}
class EmailNotificationService {
    notify(user, message) {
        // Logic to send email notification
        console.log(`Email notification sent successfully to ${user.email}.`);
        return "Notification sent successfully.";
    }
}
exports.EmailNotificationService = EmailNotificationService;
class SMSNotificationService {
    notify(user, message) {
        // Logic to send email notification
        console.log(`SMS notification sent successfully to ${user.phone}.`);
        return "Notification sent successfully.";
    }
}
exports.SMSNotificationService = SMSNotificationService;
class UserServiceImpl {
    constructor(notificationService) {
        this.notificationService = notificationService;
    }
    registerUser(user) {
        // Logic to register the user
        // ...
        // Notification service call
        const notificationResult = this.notificationService.notify(user, "Account created successfully.");
        if (notificationResult === "Notification sent successfully.") {
            return `Account created successfully for ${user.name}.`;
        }
        else {
            return `Failed to send notification for ${user.name}.`;
        }
    }
}
exports.UserServiceImpl = UserServiceImpl;
class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    createUser(name, email, phone) {
        const user = new User(name, email, phone);
        return this.userService.registerUser(user);
    }
}
exports.UserController = UserController;
