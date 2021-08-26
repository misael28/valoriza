import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
export function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const [, token] = req.headers.authorization.split(" ");

  if (!token) {
    return res.status(401).end();
  }

  try {
    const decode = verify(token, "jwtsecret");
    return next();
  } catch (err) {
    return res.status(401).end();
  }
}
