import { Router } from 'express';
import auth from '../middlewares/auth';
import CoursesRepository from '../repositories/CourseRepository';
import RegisterRepository from '../repositories/RegistrationRepository';

const courseRouter = Router();
const courseRepository = new CoursesRepository();
const registration = new RegisterRepository();

courseRouter.get('/', auth, async (request, response) => {
  const { userId } = request.body;
  const courses = await courseRepository.all(userId);
  return response.json(courses);
});

courseRouter.get('/:courseid', auth, async (request, response) => {
  const { courseid } = request.params;
  const { userId } = request.body;

  const course = await courseRepository.getCourse(courseid);
  await registration.register(courseid, userId);

  return response.json(course);
});

export default courseRouter;
