export interface IUser {
  id: number;
  email: string;
  password: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ITask {
  id: number;
  title: string;
  description?: string;
  status: 'PENDENTE' | 'EM_ANDAMENTO' | 'CONCLUIDA';
  userId: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICreateUserDTO {
  email: string;
  password: string;
  name: string;
}

export interface ICreateTaskDTO {
  title: string;
  description?: string;
  userId: number;
}

export interface IUpdateTaskDTO {
  title?: string;
  description?: string;
  status?: 'PENDENTE' | 'EM_ANDAMENTO' | 'CONCLUIDA';
} 