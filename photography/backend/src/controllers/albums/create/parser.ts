import { Request } from 'express';
import { formidable } from 'formidable';
import { Field, Image, parseField, parseSingleImage } from '../../../common/form-data';

type CreateAlbumData = Promise<Field & Image>

/**
 * Retrieves the album name and its associated image. If any obstacle prevents retrieving this data, an exception will be thrown.
 *
 * @param req Incoming http request. 
 *
 * @returns 
 * ```typescript
 * type CreateAlbumData = Promise<{
 *   name: string;
 *   image: File;
 * }>
 * ```
 * 
 * @throws Missing ${fieldName} field.
 * @throws Missing images field.
 * @throws No image was sent.
 * @throws More than one image was sent.
 */
export async function parseFormData(req: Request): CreateAlbumData {
  const form = formidable({});
  const [fields, files] = await form.parse(req);
  const { name } = parseField(fields, 'name');
  const { image } = parseSingleImage(files);
  return { name, image };
}

