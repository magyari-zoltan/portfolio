import { Request, Response } from 'express';
import { parseFormData } from './parser';
import { createNewAlbumEntryInDB, existsAlbum } from './database';
import { saveImageToStore } from '../../../common/image-store';


/**
 * Business logic for creating an album.
 *
 * @throws Error creating album. ${error}
 */
export async function createAlbum(req: Request, res: Response) {
  try {
    const { name, image } = await parseFormData(req);

    const exists = await existsAlbum(name);
    if (exists) {
      throw Error(`The album with the name '${name}' already exists.`)
    }

    const imageName = saveImageToStore(image);
    const album = await createNewAlbumEntryInDB(name, imageName);

    res.status(200).json(album);
  } catch (errorDetail) {
    const message = `Error creating album. ${errorDetail}`;
    console.error(message);
    res.status(500).json({ message })
  }
};
