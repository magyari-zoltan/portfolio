import { Request, Response } from 'express';
import { formidable } from 'formidable';
import { v4 as uuid } from 'uuid';
import fs from 'fs/promises';
import pathLib from 'path';


const IMAGES_VOLUME: string = `${process.env.IMAGES_VOLUME}`;

function validateCreateAlbumFormFields(fields: any) {
  if (!('name' in fields) || !fields?.name) {
    console.debug(`fields: ${fields}`);
    throw new Error(`Missing name field.`)
  }

  const name = fields.name[0];
  console.debug(`name: ${name}`);

  return { name }
}

function validateCreateAlbumFormFiles(files: any) {
  if (!files || !('images' in files || !files.images)) {
    console.debug({ files });
    throw new Error(`Missing images field.`)
  }

  const images = files.images;
  if (!images || !images.length || !images[0]) {
    console.debug({ images });
    throw new Error(`No image was sent.`)
  }

  const sourceImageFile = images[0];
  if (!('originalFilename' in sourceImageFile)) {
    console.debug({ sourceImageFile });
    throw new Error(`Could not determin image file path!`)
  }

  const sourceImage = sourceImageFile.originalFilename;
  console.debug({ sourceImage });
  return { sourceImage };
}

export async function createAlbum(req: Request, res: Response) {
  try {
    const form = formidable({});
    const [fields, files] = await form.parse(req);
    const { name } = validateCreateAlbumFormFields(fields);
    const { sourceImage } = validateCreateAlbumFormFiles(files);

    const targetImage = uuid();
    const targetPath = pathLib.join(IMAGES_VOLUME, name);
    console.debug({ targetPath });
    await fs.mkdir(targetPath, { recursive: true });

    const f = await fs.readdir(IMAGES_VOLUME);
    console.debug('List files');
    f.forEach(file => {
      console.debug({ file });
    })

    res.json({ message: { name, sourceImage, targetImage } });
  } catch (error) {
    const message = `Error creating album. ${error}`;
    console.error(message);
    res.status(500).json({ message })
  }
};
