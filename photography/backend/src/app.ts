import express, { Application } from 'express';
import cors from 'cors';
import routes from './routes/routes';

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/photography-api', routes);

export default app;

