import { Request, Response } from 'express';
import { parseFormData } from './parser';
import { deleteImageFromStore, saveImageToStore } from '../../../common/image-store';
import { createNewImageEntryInDB } from './database';
import { existsAlbum, getAlbumFromDB } from '../../albums/create/database';
import { toObjectID } from '../../../common/database';

/**
 * Business logic for upload images.
 *
 * @throws Error uploading images. ${errorDetails}
 * @throws The album with the id '${id}' does not exists.
 */
export async function uploadImage(req: Request, res: Response) {
  const uploadedImages = [] as { image: string | null, message?: any }[];
  let status = 200;
  let message = '';

  try {
    const { albumId, images } = await parseFormData(req);
    await getAlbumFromDB(toObjectID(albumId));

    for (let index = 0; index < images.length; index++) {
      const image = images[index];
      const imageName = saveImageToStore(image);

      try {
        const entity = await createNewImageEntryInDB(albumId, imageName);
        console.debug(`Image uploaded: ${entity}`);

        uploadedImages.push({
          image: image.originalFilename
        })
      } catch (errorDetails) {
        deleteImageFromStore(imageName);
        status = 500;
        message = `Image upload failed.`
        uploadedImages.push({
          image: image.originalFilename,
          message: `${errorDetails}`
        });
      }
    }

  } catch (errorDetails) {
    status = 500;
    message = `Image upload failed. ${errorDetails}`
  } finally {
    if (status == 200) {
      res.json({ images: uploadedImages });
      console.debug(`Images upload finished with success. ${uploadedImages}`);
    } else {
      console.debug({ message, images: uploadedImages });
      res.status(status).json({ message, images: uploadedImages });
    }
  }
}
