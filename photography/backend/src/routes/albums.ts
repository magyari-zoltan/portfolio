import { Router } from 'express';
import { createAlbum } from '../controllers/albums/create';
import { getAlbums } from '../controllers/albums/add';

const router = Router();

router.get('/albums', getAlbums);
router.post('/albums', createAlbum);

export default router;

