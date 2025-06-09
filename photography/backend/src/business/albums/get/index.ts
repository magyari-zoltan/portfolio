import { Request, Response } from 'express';
import { fetchtImageById } from '../../images/database';
import { fetchAlbumById, fetchAlbums } from '../database';
import { parseParam } from '../../../common/request-params';

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
 * Business logic for retrieving an album by its id.
 *
 * @throws `Failed to get the album with the id ${albumId}. ${errorDetail}`
 */
export async function getAlbumById(req: Request, res: Response) {
  try {
    const albumId = parseParam(req.params, 'id');

    try {
      const album = await fetchAlbumById(albumId);
      res.status(200).json(album);
    } catch (errorDetail) {
      const message = `Failed to get the album with the id ${albumId}. ${errorDetail}`;
      console.error(message);
      res.status(500).json({ message });
    }

  } catch (message) {
    console.error(message);
    res.status(500).json({ message });
  }
}
