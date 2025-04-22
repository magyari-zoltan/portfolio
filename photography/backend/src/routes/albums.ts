import { Router } from 'express';
import { createAlbum } from '../controllers/albums/create';
import { getAlbums } from '../controllers/albums/get';

const router = Router();

router.get('/albums', getAlbums);
router.post('/albums', createAlbum);

export default router;

