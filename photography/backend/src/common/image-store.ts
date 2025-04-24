import fs from 'fs';
import path from 'path';
import { v4 as uuid } from 'uuid';
import { File } from 'formidable';

const IMAGES_VOLUME: string = `${process.env.IMAGES_VOLUME}`;
console.debug(`Path to store images: ${IMAGES_VOLUME}`);

/**
 *  Copies the specified image to the image store.
 *
 *  @returns the name under which the image was saved.
 *  @throws Could not save the image '${image.originalFilename}' to the '${targetPath}' because an image with that name already exists.
 */
export function saveImageToStore(image: File): string {
  const imageName = uuid();
  const fileExtension = getFileExtension(image.originalFilename);
  const targetPath = path.join(IMAGES_VOLUME, imageName) + fileExtension;

  if (!fs.existsSync(targetPath)) {
    fs.cpSync(image.filepath, targetPath);
  } else {
    const message = `Could not save the image '${image.originalFilename}' to the '${targetPath}' because an image with that name already exists.`;
    console.error(message);
    throw new Error(message);
  }
  return imageName + fileExtension;
}

/**
 * It parses the file extension from the file name and ensures that it begins with a dot.
 *
 * @return the file extension
 */
function getFileExtension(fileName: string | undefined | null): string {
  const fileExtension = path.extname(fileName || '').toLowerCase();
  return fileExtension.startsWith('.') ? fileExtension : `.${fileExtension}`;
}

/**
 *  Deletes the specified image from the image store.
 *
 *  @param imageName is the name under which the image was saved.
 */
export function deleteImageFromStore(imageName: string) {
  const targetPath = path.join(IMAGES_VOLUME, imageName);

  if (fs.existsSync(targetPath)) {
    fs.rmSync(targetPath);
  } else {
    const message = `Could not delete the image '${imageName}' from the '${targetPath}' because the image does not exists.`;
    console.warn(message);
  }
}

