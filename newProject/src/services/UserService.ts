import { ICreateUserDTO, IUser } from '../@types';
import prisma from '../lib/prisma';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export class UserService {
  async create({ email, password, name }: ICreateUserDTO): Promise<{ user: IUser; token: string }> {
    const userExists = await prisma.user.findUnique({
      where: { email }
    });

    if (userExists) {
      throw new Error('Usuário já existe');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name
      }
    });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || 'default_secret', {
      expiresIn: '1d'
    });

    return {
      user,
      token
    };
  }

  async login(email: string, password: string): Promise<{ user: IUser; token: string }> {
    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('Senha incorreta');
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || 'default_secret', {
      expiresIn: '1d'
    });

    return {
      user,
      token
    };
  }
} 