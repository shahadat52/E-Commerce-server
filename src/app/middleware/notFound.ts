import { NextFunction, Request, Response } from 'express';

const notFound = (
  req: Request,
  res: Response,
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  next: NextFunction,
) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
};

export default notFound;
