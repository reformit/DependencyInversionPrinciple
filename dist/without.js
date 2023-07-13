"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
class User {
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
}
class EmailNotificationService {
    sendEmail(user, message) {
        // Logic to send email notification
        return `Email notification sent successfully to ${user.email}.`;
    }
}
class UserService {
    constructor(notificationService) {
        this.notificationService = notificationService;
    }
    registerUser(user) {
        // Logic to register the user
        // ...
        // Notification service call
        const notificationResult = this.notificationService.sendEmail(user, `Account for ${user.name} created successfully.`);
        console.log(notificationResult);
        if (notificationResult ===
            `Email notification sent successfully to ${user.email}.`) {
            return `Account created successfully for ${user.name}.`;
        }
        else {
            return `Failed to send email notification for ${user.name}.`;
        }
    }
}
class UserController {
    constructor() {
        const emailNotificationService = new EmailNotificationService();
        this.userService = new UserService(emailNotificationService);
    }
    createUser(name, email, phone) {
        const user = new User(name, email, phone);
        return this.userService.registerUser(user);
    }
}
exports.UserController = UserController;
