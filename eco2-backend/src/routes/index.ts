import { Router } from 'express';

import userRouter from './user.routes';
import courseRouter from './course.routes';
import challengeRouter from './challenge.routes';
import registerRouter from './register.routes';

const routes = Router();

routes.use('/user', userRouter);

routes.use('/course', courseRouter);

routes.use('/challenge', challengeRouter);

routes.use('/register', registerRouter);

export default routes;
