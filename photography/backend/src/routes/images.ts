import { Router } from 'express';
import { getImageById, getImageByName } from '../controllers/images/get';
import { uploadImage } from '../controllers/images/upload';

const router = Router();

router.get('/images/file/:imageName', getImageByName);
router.get('/images/:id', getImageById);
router.post('/images', uploadImage);

export default router;


