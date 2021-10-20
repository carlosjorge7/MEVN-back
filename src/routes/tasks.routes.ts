import {  Router } from 'express';
import * as taskCtrl from '../controllers/tasks.controller';

const router = Router();

router.get('/tasks', taskCtrl.getTasks);
router.get('/tasks/:id', taskCtrl.getTask);
router.post('/tasks', taskCtrl.createTask);
router.put('/tasks/:id', taskCtrl.updateTask)
router.delete('/tasks/:id', taskCtrl.deleteTask)

export default router;