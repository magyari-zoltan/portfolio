import { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { parseParam } from '../../../common/request-params';

const IMAGES_VOLUME: string = `${process.env.IMAGES_VOLUME}`;

/**
 * Business logic for retrieving an image from the store.
 *
 * @throws The image can not be retrieved. ${errorDetail}
 */
export async function getImage(req: Request, res: Response) {
  try {
    const { album } = parseParam(req.params, 'album');
    const { imageName } = parseParam(req.params, 'imageName');

    const imagePath = path.join(IMAGES_VOLUME, album, imageName);
    if (!fs.existsSync(imagePath)) {
      throw new Error(`The image '${imagePath}' does not exists.`);
    }

    res.sendFile(imagePath);
  } catch (errorDetail) {
    const message = `The image can not be retrieved. ${errorDetail}`;
    console.error(message);
    res.status(404).json({ message });
  }

}
