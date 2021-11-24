import { Router } from 'express';
import CoursesRepository from '../repositories/CourseRepository';
import UserRepository from '../repositories/UserRepository';

const userRouter = Router();
const userRepository = new UserRepository();
const coursesRepository = new CoursesRepository();

userRouter.get('/:id', async (request, response) => {
  const { id } = request.params;

  const user = await userRepository.findUser(id);
  const courses = await coursesRepository.getUserCourses(id);

  const data = {
    _id: user._id,
    name: user.name,
    avatar: user.avatar,
    courses,
  };

  return response.json(data);
});

export default userRouter;
