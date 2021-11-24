import { ErrorRequestHandler, NextFunction, Response, Request } from 'express';

export function clientErrorHandler(
  err: ErrorRequestHandler,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.log('error middleware');
  res.sendStatus(500);
}
