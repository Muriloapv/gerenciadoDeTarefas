import { Task } from '@prisma/client';
import { ITaskRepository } from './interfaces/ITaskRepository';
import prisma from '../lib/prisma';

export class PrismaTaskRepository implements ITaskRepository {
  async create(data: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>): Promise<Task> {
    return prisma.task.create({
      data
    });
  }

  async findAll(): Promise<Task[]> {
    return prisma.task.findMany();
  }

  async findByUserId(userId: string): Promise<Task[]> {
    return prisma.task.findMany({
      where: { userId }
    });
  }

  async findByStatus(status: string): Promise<Task[]> {
    return prisma.task.findMany({
      where: { status }
    });
  }

  async findById(id: string): Promise<Task | null> {
    return prisma.task.findUnique({
      where: { id }
    });
  }

  async update(id: string, data: Partial<Task>): Promise<Task> {
    return prisma.task.update({
      where: { id },
      data
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.task.delete({
      where: { id }
    });
  }
} 