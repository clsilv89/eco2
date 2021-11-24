import Registration, { IRegistration } from '../models/Registration';

class RegisterRepository {
  private registrations: IRegistration;

  constructor() {
    this.registrations = {} as IRegistration;
  }

  public async all(): Promise<IRegistration> {
    return await Registration.find();
  }

  public async register(
    courseId: string,
    userId: string,
  ): Promise<IRegistration> {
    const registration = await Registration.findOne({
      course: courseId,
      user: userId,
    });

    if (registration) return registration;

    const newRegister = await Registration.create({
      course: courseId,
      user: userId,
      status: 'open',
    });
    return newRegister;
  }

  public async completeCourse(courseId: string, userId: string) {
    const registration = await Registration.findOneAndUpdate(
      {
        course: courseId,
        user: userId,
      },
      {
        status: 'done',
      },
    );

    return {};
  }
}

export default RegisterRepository;
