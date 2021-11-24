import Course, { ICourse } from '../models/Course';
import Registration, { IRegistration } from '../models/Registration';

interface UserCourses {
  coursesAvailable: number;
  coursesCompleted: number;
}

class CoursesRepository {
  private courses: ICourse[];

  constructor() {
    this.courses = [];
  }

  public async all(userId: string): Promise<ICourse[]> {
    const courses: ICourse[] = await Course.find();

    const userRegistrations: IRegistration[] = await Registration.find({
      user: userId,
    });

    courses.map(course =>
      userRegistrations.map(register => {
        if (course._id == register.course) {
          if (register.status === 'done') {
            course.status = 'done';
          } else {
            course.status = 'open';
          }
        }
      }),
    );

    return courses;
  }

  public async getCourse(courseid: string): Promise<ICourse> {
    const course = await Course.findById(courseid);

    if (!course) {
      throw new Error('Nenhum curso foi encontrado');
    }

    return course;
  }

  public async getUserCourses(userId: string): Promise<UserCourses> {
    const courses: ICourse[] = await Course.find();

    const userRegistrations: IRegistration[] = await Registration.find({
      user: userId,
      status: 'done',
    });

    const data = {
      coursesAvailable: courses.length,
      coursesCompleted: userRegistrations.length,
    };

    return data;
  }
}

export default CoursesRepository;
