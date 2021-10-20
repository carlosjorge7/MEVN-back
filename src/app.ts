import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import taskRoutes from './routes/tasks.routes'

const app = express();

// middlewares
app.use(cors())
app.use(morgan('dev'));
app.use(express.json()); // Para interpetrar datos del front

// routes
app.use('/api', taskRoutes);

export default app;