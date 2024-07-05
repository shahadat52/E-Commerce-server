/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

import { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = err?.statusCode || 500;
  const success = false;
  const message = err?.message || 'Internal Server Error';

  if (err instanceof ZodError) {
    const error = err.issues.map((issu) => {
      return {
        message: issu.message,
      };
    });

    res.status(statusCode).json({
      success,
      message: error[0].message,
    });
  }

  res.status(statusCode).json({
    success,
    message,
  });
};

export default globalErrorHandler;
