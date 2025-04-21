import { Request, Response } from 'express';
import { parseFormData } from './parser';
import { createFolder, saveImageToFolder } from './files';


const IMAGES_VOLUME: string = `${process.env.IMAGES_VOLUME}`;
console.debug(`Path to store: ${IMAGES_VOLUME}`);

/**
 * Business logic for creating an album.
 *
 * @throws `Error creating album. ${error}`
 */
export async function createAlbum(req: Request, res: Response) {
  try {
    const { album, image } = await parseFormData(req);
    const targetFoder = createFolder(album, IMAGES_VOLUME);
    const imageName = saveImageToFolder(image, targetFoder);


    res.json({ message: { album, sourceImage: image.originalFilename, imageName } });
  } catch (error) {
    const message = `Error creating album. ${error}`;
    console.error(message);
    res.status(500).json({ message })
  }
};
