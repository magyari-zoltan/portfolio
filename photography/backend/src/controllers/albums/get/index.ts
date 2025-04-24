import { Request, Response } from 'express';
import { getAlbumsFromDB } from './database';
import { getImageFromDB } from '../../images/upload/database';

/**
 * Business logic for retrieving all albums from the database.
 *
 * @throws `Failed to get the list of albums from the database. ${errorDetail}`
 */
export async function getAlbums(req: Request, res: Response) {
  try {
    const albumEntities = await getAlbumsFromDB();
    const albums = await Promise.all(albumEntities.map(async (album) => ({
      coverImageName: (await getImageFromDB(album.coverImageId)).name,
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
