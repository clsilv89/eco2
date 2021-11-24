import { Router } from 'express';
import RegisterRepository from '../repositories/RegistrationRepository';

const registerRouter = Router();
const registerRepository = new RegisterRepository();

registerRouter.post('/', async (request, response) => {
  const { courseId, userId } = request.body;

  const register = await registerRepository.register(courseId, userId);

  return response.json(register);
});

export default registerRouter;
