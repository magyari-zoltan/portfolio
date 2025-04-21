import fs from 'fs';
import path from 'path';
import { v4 as uuid } from 'uuid';
import { File } from 'formidable';

/**
 * Creates a folder named after the album in the store’s path if it doesn’t already exist.
 *
 * @returns target path
 */
export function createFolder(album: string, pathToStore: string): string {
  const targetPath = path.join(pathToStore, album);
  console.debug(`Folder path to create: ${pathToStore}`);

  if (!fs.existsSync(targetPath)) {
    console.debug(`Create the album folder '${targetPath}'.`);
    fs.mkdirSync(targetPath, { recursive: true });
  } else {
    console.debug(`Folder for the album '${targetPath}' exists already.`);
  }
  return targetPath;
}

/**
 *  Copies the specified image to the target folder.
 *
 *  @returns the name under which the image was saved.
 *  @throws `Could not copy the image '${image.originalFilename}' to the '${targetPath}' because an image with that name already exists.`
 */
export function saveImageToFolder(image: File, targetFolder: string): string {
  const imageName = uuid();
  const fileExtension = getFileExtension(image.originalFilename);
  const targetPath = path.join(targetFolder, imageName) + fileExtension;

  if (!fs.existsSync(targetPath)) {
    fs.cpSync(image.filepath, targetPath);
  } else {
    const message = `Could not copy the image '${image.originalFilename}' to the '${targetPath}' because an image with that name already exists.`;
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
