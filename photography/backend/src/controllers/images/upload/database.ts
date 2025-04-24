import Image from "../../../database/collections/Image"
import { IImage } from "../../../model/IImage";
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
 * @returns Promise<IImage[]>
 */
export async function getImageFromDB(id: Types.ObjectId): Promise<IImage> {
  const image = await Image.findById(id).exec();
  console.debug(`Image retrieved from db: ${image}`);
  return image as IImage;
}

/**
 * Takes a string and converts it to a `Types.ObjectId`. If the conversion fails, an error is thrown.
 *
 * @param id that should be converted to `Types.ObjectID`.
 * @returns `Types.ObjectId`.
 * @throws Invalid object id '${id}'.
 */
function toObjectID(id: string): Types.ObjectId {
  if (Types.ObjectId.isValid(id)) {
    return new Types.ObjectId(id);
  }
  throw new Error(`Invalid object id '${id}'`);
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
