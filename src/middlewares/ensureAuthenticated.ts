import { NextFunction, request, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

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
    const { sub } = verify(token, "jwtsecret") as IPayload;
    req.user_id = sub;
    return next();
  } catch (err) {
    return res.status(401).end();
  }
}
