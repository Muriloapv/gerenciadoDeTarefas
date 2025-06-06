import { Task } from '@prisma/client';

export interface ITaskRepository {
  create(data: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>): Promise<Task>;
  findAll(): Promise<Task[]>;
  findByUserId(userId: string): Promise<Task[]>;
  findByStatus(status: string): Promise<Task[]>;
  findById(id: string): Promise<Task | null>;
  update(id: string, data: Partial<Task>): Promise<Task>;
  delete(id: string): Promise<void>;
} 