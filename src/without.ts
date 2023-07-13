class User {
  constructor(
    public name: string,
    public email: string,
    public phone: string
  ) {}
}

class EmailNotificationService {
  sendEmail(user: User, message: string): string {
    // Logic to send email notification
    return `Email notification sent successfully to ${user.email}.`;
  }
}

class UserService {
  constructor(private notificationService: EmailNotificationService) {}

  registerUser(user: User): string {
    // Logic to register the user
    // ...
    // Notification service call
    const notificationResult = this.notificationService.sendEmail(
      user,
      `Account for ${user.name} created successfully.`
    );

    console.log(notificationResult);

    if (
      notificationResult ===
      `Email notification sent successfully to ${user.email}.`
    ) {
      return `Account created successfully for ${user.name}.`;
    } else {
      return `Failed to send email notification for ${user.name}.`;
    }
  }
}

export class UserController {
  private userService: UserService;

  constructor() {
    const emailNotificationService = new EmailNotificationService();
    this.userService = new UserService(emailNotificationService);
  }

  createUser(name: string, email: string, phone: string): string {
    const user = new User(name, email, phone);
    return this.userService.registerUser(user);
  }
}
