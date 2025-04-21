import { Router } from 'express';
import { createAlbum } from '../controllers/albums/create';

const router = Router();

router.post('/albums', createAlbum);

export default router;

