import { Router } from 'express';
import { getImageById, getImageByName } from '../business/images/get';
import { uploadImage } from '../business/images/upload';

const router = Router();

router.get('/images/file/:imageName', getImageByName);
router.get('/images/:id', getImageById);
router.post('/images', uploadImage);

export default router;


