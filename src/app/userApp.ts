import type { IUser, User } from "../models/userModel";

class userApp {
  readonly app: IUser;
  constructor(app: IUser) {
    this.app = app;
  }
  
  async add(user: User): Promise<User> {
    return await this.app.add(user);
  }
}
