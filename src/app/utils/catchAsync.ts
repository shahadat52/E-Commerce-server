import { Request, RequestHandler, Response } from 'express';
import { NextFunction } from 'express-serve-static-core';

const catchAsync = (fn: RequestHandler) => {
    return (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(fn(req, res, next)).catch((err) => next(err));
    };
};

export default catchAsync;
