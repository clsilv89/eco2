import { Request, Response, NextFunction } from 'express';

export default async (req: Request, res: Response, next: NextFunction) => {
  const { user = '6147c0d8f8a57743c9b6932e' } = req.headers;

  if (!user) {
    return res.status(401).json({ error: 'Usuário não esta logado.' });
  }

  try {
    req.body.userId = user;

    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Erro na authenticação.' });
  }
};
