import { Router } from 'express';
import { helloWorld } from '../controllers/controllers';

const router = Router();

router.get('/helloWorld', helloWorld);

export default router;

