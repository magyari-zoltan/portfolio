import { toObjectID } from "../../common/database";
import Image from "../../database/collections/Image"
import { IImage } from "../../model/IImage";
import { Types } from 'mongoose';

/**
 * Creates a new image entry in the database.
 *
 * @param image Data to create an image entry in the database.
 * @return the newly created entity as a `Promise<IImage>`.
 */
export async function createNewImageEntryInDB(albumId: string, imageName: string): Promise<IImage> {
  const position = await countAlbumImages(albumId) + 1;
  const entity = new Image({
    albumId: toObjectID(albumId),
    name: imageName,
    position
  });
  console.debug(`New image entry: ${entity}`)
  return await entity.save();
}

/**
 * Checks if an image exists with a given name.
 *
 * @returns `Promise<boolean>`
 */
export async function existsImage(name: string): Promise<boolean> {
  return !!await Image.exists({ name });
}

/**
 * Retrieves an image entry from the database by id.
 *
 * @param id is the ID of the image that should be returned.
 * @returns Promise<IImage>
 * @throws The image with the id '${id}' does not exists.
 */
export async function fetchtImageById(id: Types.ObjectId): Promise<IImage> {
  const image = await Image.findById(id).exec();
  console.debug(`Image retrieved from db: ${image}`);

  if (!image) {
    throw Error(`The image with the id '${id}' does not exists.`)
  }

  return image as IImage;
}

/**
 * Retrieves all images from the database belonging to a give album.
 *
 * @param albumId is the id of the album of interest.
 * @returns Promise<IImage[]> the list of images from the album.
 */
export async function fetchAlbumImages(albumId: string): Promise<IImage[]> {
  const images = await Image.find({ albumId }).exec();
  console.debug(`Images in the album with id ${albumId}: ${images}`);

  if (!images) {
    return [];
  }

  return images as IImage[];
}

/**
 * Counts the number of images in an album.
 *
 * @param albumId is the ID of the album whose images should be counted.
 * @returns the number of images in an album as a `Promise<number>`.
 */
async function countAlbumImages(albumId: string) {
  return await Image.countDocuments({ albumId: toObjectID(albumId) });
}
