import { Router } from 'express';
import { createAlbum } from '../business/albums/create';
import { getAlbums } from '../business/albums/get';

const router = Router();

router.get('/albums', getAlbums);
router.post('/albums', createAlbum);

export default router;

