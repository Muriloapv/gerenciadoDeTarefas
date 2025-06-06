import { ICreateTaskDTO, ITask, IUpdateTaskDTO } from '../@types';
import prisma from '../lib/prisma';

export class TaskService {
  async create({ title, description, userId }: ICreateTaskDTO): Promise<ITask> {
    const task = await prisma.task.create({
      data: {
        title,
        description,
        userId
      }
    });

    return task;
  }

  async listAll(userId: number): Promise<ITask[]> {
    const tasks = await prisma.task.findMany({
      where: { userId }
    });

    return tasks;
  }

  async listByStatus(userId: number, status: string): Promise<ITask[]> {
    const tasks = await prisma.task.findMany({
      where: {
        userId,
        status
      }
    });

    return tasks;
  }

  async update(id: number, userId: number, data: IUpdateTaskDTO): Promise<ITask> {
    const task = await prisma.task.findFirst({
      where: { id, userId }
    });

    if (!task) {
      throw new Error('Tarefa não encontrada');
    }

    const updatedTask = await prisma.task.update({
      where: { id },
      data
    });

    return updatedTask;
  }

  async delete(id: number, userId: number): Promise<void> {
    const task = await prisma.task.findFirst({
      where: { id, userId }
    });

    if (!task) {
      throw new Error('Tarefa não encontrada');
    }

    await prisma.task.delete({
      where: { id }
    });
  }
} 