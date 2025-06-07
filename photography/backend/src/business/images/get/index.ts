import { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { parseParam } from '../../../common/request-params';
import { fetchtImageById } from '../database';

const IMAGES_VOLUME: string = `${process.env.IMAGES_VOLUME}`;

/**
 * Business logic for retrieving an image from the store by its name.
 *
 * @throws The image can not be retrieved. ${errorDetail}
 */
export async function getImageByName(req: Request, res: Response) {
  try {
    const imageName = parseParam(req.params, 'imageName');

    const imagePath = path.join(IMAGES_VOLUME, imageName);
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

/**
 * Business logic for retrieving an image from the store by its id.
 *
 * @throws The image can not be retrieved. ${errorDetail}
 * @throws The image with the id '${id}' does not exists.
 */
export async function getImageById(req: Request, res: Response) {
  try {
    const id = parseParam(req.params, 'id');
    const image = await fetchtImageById(id);
    res.json(image);
  } catch (errorDetail) {
    const message = `The image can not be retrieved. ${errorDetail}`;
    console.error(message);
    res.status(404).json({ message });
  }
}
