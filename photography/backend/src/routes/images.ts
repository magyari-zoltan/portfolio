import { Router } from 'express';
import { getImage } from '../controllers/images/get';

const router = Router();

router.get('/images/:album/:imageName', getImage);

export default router;


