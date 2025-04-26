import { Fields, Files, File } from 'formidable';

/**
 * Finds the field with the given name. If there is any obstacle to the filed
 * to be found, an exception will be thrown.
 *
 * @param fields List of fileds in which to search for one with the give name.
 * @param fieldName The name of the field to search for.
 *
 * @returns the value of the specified field.
 *
 * @throws Missing ${fieldName} field.
 */
export function parseField(fields: Fields, fieldName: string): any {
  if (!(fieldName in fields) || !fields[fieldName] || !fields[fieldName]?.length) {
    console.debug(`Parsing fields ${fields} failed`);
    throw new Error(`Missing ${fieldName} field.`)
  }

  const value = fields[fieldName][0];
  console.debug(`Field '${fieldName}' parsed: ${value}`);

  return value;
}

/**
 * Retrieves the first image from the files input parameter. If there is any 
 * obstacle to be retrieved, an exception will be thrown.
 *
 * @param files The list of files to retrieve the image from.
 *
 * @returns the image in a `File` format.
 *
 * @throws Missing images field.
 * @throws No image was sent.
 * @throws More than one image was sent.
 */
export function parseSingleImage(files: Files): File {
  if (!files || !('images' in files)) {
    console.debug(`Parsing files ${files} failed.`);
    throw new Error(`Missing images field.`)
  }

  const images = files.images;
  if (!images || !images.length || !images[0]) {
    console.debug(`No image: ${images}.`);
    throw new Error(`No image was sent.`)
  }

  if (images.length > 1) {
    console.debug(`More than one image: ${images}.`);
    throw new Error(`More than one image was sent.`)
  }

  console.debug(`Single image parsed: ${images[0]}`);
  return images[0];
}

/**
 * Retrieves all images from the files input parameter. If there is any 
 * obstacle to be retrieved, an exception will be thrown.
 *
 * @param files The list of files to retrieve the images from.
 *
 * @returns an array of images in a `File[]` format.
 *
 * @throws Missing images field.
 * @throws No image was sent.
 * @throws The image with the index ${index} is not available.
 */
export function parseImages(files: Files): File[] {
  if (!files || !('images' in files)) {
    console.debug(`Parsing files ${files} failed.`);
    throw new Error(`Missing images field.`)
  }

  const images = files.images;
  if (!images || !images.length) {
    console.debug(`No image: ${images}.`);
    throw new Error(`No image was sent.`)
  }

  const imageFiles = images.map((image, index) => {
    if (!image) {
      console.debug(`The image with the index ${index} is not available.`);
      throw new Error(`The image with the index ${index} is not available.`)
    }
    return image as File;
  });

  console.debug(`Parsed images: ${imageFiles}`);
  return imageFiles;
}
