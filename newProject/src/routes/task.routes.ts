import { Router } from 'express';
import { TaskController } from '../controllers/TaskController';
import { authMiddleware } from '../middlewares/auth';

const router = Router();
const taskController = new TaskController();

router.use(authMiddleware);

router.post('/', (req, res) => taskController.create(req, res));
router.get('/', (req, res) => taskController.listAll(req, res));
router.get('/status/:status', (req, res) => taskController.listByStatus(req, res));
router.put('/:id', (req, res) => taskController.update(req, res));
router.delete('/:id', (req, res) => taskController.delete(req, res));

export default router; 