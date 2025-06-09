import { Router } from 'express';
import { createAlbum } from '../business/albums/create';
import { getAlbumById, getAlbums } from '../business/albums/get';

const router = Router();

router.get('/albums', getAlbums);
router.get('/albums/:id', getAlbumById);
router.post('/albums', createAlbum);

export default router;

