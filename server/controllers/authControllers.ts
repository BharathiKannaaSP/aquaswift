import { Request, Response } from 'express';
import prisma from '../lib/prisma.ts';

export const register = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  const newUser = await prisma.user.create({
    data: {
      username,
      email,
      password,
    },
  });
  res.status(201).json(newUser);
};
export const login = () => {};
export const logout = () => {};
