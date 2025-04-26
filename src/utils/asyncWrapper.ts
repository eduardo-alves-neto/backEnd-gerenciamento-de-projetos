import { NextFunction, Request, RequestHandler, Response } from "express";

type AsyncRequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<Response | void>;

export const asyncWrapper =
  (fn: AsyncRequestHandler): RequestHandler =>
  (req, res, next) =>
    fn(req, res, next)
      .then((result) => {
        if (result !== undefined) {
          res.send(result);
        }
      })
      .catch(next);
