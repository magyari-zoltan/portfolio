import { Request, Response } from 'express';
import { parseFormData } from './parser';
import { createFolder, saveImageToFolder } from './files';
import { createNewAlbumEntryInDB, existsAlbum } from './database';


const IMAGES_VOLUME: string = `${process.env.IMAGES_VOLUME}`;
console.debug(`Path to store: ${IMAGES_VOLUME}`);

/**
 * Business logic for creating an album.
 *
 * @throws `Error creating album. ${error}`
 */
export async function createAlbum(req: Request, res: Response) {
  try {
    const { name, image } = await parseFormData(req);

    const exists = await existsAlbum(name);
    if (exists) {
      throw Error(`The album with the name '${name}' already exists.`)
    }

    const targetFoder = createFolder(name, IMAGES_VOLUME);
    const imageName = saveImageToFolder(image, targetFoder);
    const album = await createNewAlbumEntryInDB({ name, image: imageName });

    res.json(album);
  } catch (error) {
    const message = `Error creating album. ${error}`;
    console.error(message);
    res.status(500).json({ message })
  }
};
