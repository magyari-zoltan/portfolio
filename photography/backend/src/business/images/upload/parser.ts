import { Request } from 'express';
import { File, formidable } from 'formidable';
import { parseField, parseImages } from '../../../common/form-data';

type UploadImageData = Promise<{ albumId: string, images: File[] }>

/**
 * Retrieves an array of images and the ID of the album that contains them. If any obstacle prevents retrieving this data, an exception will be thrown.
 *
 * @param req Incoming http request. 
 *
 * @returns 
 * ```typescript
 * type UploadImageData = Promise<{
 *   albumId: string;
 *   images: File[];
 * }>
 * ```
 * 
 * @throws Missing ${fieldName} field.
 * @throws Missing images field.
 * @throws No image was sent.
 * @throws The image with the index ${index} is not available.
 */
export async function parseFormData(req: Request): UploadImageData {
  const form = formidable({});
  const [fields, files] = await form.parse(req);
  const albumId = parseField(fields, 'albumId');
  const images = parseImages(files);
  return { albumId, images };
}


