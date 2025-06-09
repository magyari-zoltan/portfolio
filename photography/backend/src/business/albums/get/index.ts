import { Request, Response } from 'express';
import { fetchAlbumImages, fetchtImageById } from '../../images/database';
import { fetchAlbums } from '../database';
import { IAlbum } from '../../../model/IAlbum';

/**
 * Business logic for retrieving all albums from the database.
 *
 * @throws `Failed to get the list of albums from the database. ${errorDetail}`
 * @throws The image with the id '${id}' does not exists.
 */
export async function getAlbums(req: Request, res: Response) {
  try {
    const albumEntities = await fetchAlbums();
    const albums = await Promise.all(albumEntities.map(async (album) => ({
      _id: album._id,
      __v: album.__v,
      coverImageName: (await fetchtImageById(album.coverImageId)).name,
      name: album.name,
      position: album.position
    })));
    console.debug({ albums });
    res.status(200).json(albums);
  } catch (errorDetail) {
    const message = `Failed to get the list of albums from the database. ${errorDetail}`;
    console.error(message);
    res.status(500).json({ message });
  }
}


/**
 * Business logic for retrieving all images from a given album.
 *
 * @throws `Failed to get images for the album with the id ${albumId}. ${errorDetail}`
 */
export async function getAlbumImages(req: Request, res: Response) {
  const albumId = req.params.id;

  try {
    const images = await fetchAlbumImages(albumId);
    res.status(200).json(images);
  } catch (errorDetail) {
    const message = `Failed to get images for the album with the id ${albumId}. ${errorDetail}`;
    console.error(message);
    res.status(500).json({ message });
  }
}
