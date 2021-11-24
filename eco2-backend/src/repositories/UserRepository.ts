import User, { IUser } from '../models/User';

class UserRepository {
  private user: IUser;

  constructor() {
    this.user = {} as IUser;
  }

  public async create(): Promise<IUser> {
    return {} as IUser;
  }

  public all(): IUser {
    return this.user;
  }

  public async findUser(userId: string): Promise<IUser> {
    const user = await User.findById(userId);

    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    return user;
  }
}

export default UserRepository;
