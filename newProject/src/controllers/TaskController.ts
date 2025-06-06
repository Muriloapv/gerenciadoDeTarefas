import { Request, Response } from 'express';
import { TaskService } from '../services/TaskService';

export class TaskController {
  private taskService: TaskService;

  constructor() {
    this.taskService = new TaskService();
  }

  async create(req: Request, res: Response): Promise<Response> {
    try {
      const { title, description } = req.body;
      const userId = req.userId;

      const task = await this.taskService.create({ title, description, userId });

      return res.json(task);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  async listAll(req: Request, res: Response): Promise<Response> {
    try {
      const userId = req.userId;
      const tasks = await this.taskService.listAll(userId);

      return res.json(tasks);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  async listByStatus(req: Request, res: Response): Promise<Response> {
    try {
      const { status } = req.params;
      const userId = req.userId;

      const tasks = await this.taskService.listByStatus(userId, status);

      return res.json(tasks);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const userId = req.userId;
      const data = req.body;

      const task = await this.taskService.update(Number(id), userId, data);

      return res.json(task);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const userId = req.userId;

      await this.taskService.delete(Number(id), userId);

      return res.status(204).send();
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
} 