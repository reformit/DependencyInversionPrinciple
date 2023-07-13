class User {
  constructor(
    public name: string,
    public email: string,
    public phone: string
  ) {}
}

export interface INotificationService {
  notify(user: User, message: string): string;
}

export class EmailNotificationService implements INotificationService {
  notify(user: User, message: string): string {
    // Logic to send email notification
    console.log(`Email notification sent successfully to ${user.email}.`);
    return "Notification sent successfully.";
  }
}

export class SMSNotificationService implements INotificationService {
  notify(user: User, message: string): string {
    // Logic to send email notification
    console.log(`SMS notification sent successfully to ${user.phone}.`);
    return "Notification sent successfully.";
  }
}

export interface IUserService {
  registerUser(user: User): string;
}

export class UserServiceImpl implements IUserService {
  constructor(private notificationService: INotificationService) {}

  registerUser(user: User): string {
    // Logic to register the user
    // ...
    // Notification service call
    const notificationResult = this.notificationService.notify(
      user,
      "Account created successfully."
    );

    if (notificationResult === "Notification sent successfully.") {
      return `Account created successfully for ${user.name}.`;
    } else {
      return `Failed to send notification for ${user.name}.`;
    }
  }
}

export class UserController {
  private userService: IUserService;

  constructor(userService: IUserService) {
    this.userService = userService;
  }

  createUser(name: string, email: string, phone: string): string {
    const user = new User(name, email, phone);
    return this.userService.registerUser(user);
  }
}
