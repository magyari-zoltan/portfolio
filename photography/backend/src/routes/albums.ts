import { Router } from 'express';
import { createAlbum } from '../business/albums/create';
import { getAlbumImages, getAlbums } from '../business/albums/get';

const router = Router();

router.get('/albums', getAlbums);
router.get('/albums/:id', getAlbumImages);
router.post('/albums', createAlbum);

export default router;

