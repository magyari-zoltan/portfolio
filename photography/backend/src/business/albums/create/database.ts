import { Types } from "mongoose";
import Album from "../../../database/collections/Album";
import Image from "../../../database/collections/Image";
import { IAlbum } from "../../../model/IAlbum";

/**
 * Creates a new album entry in the database.
 *
 * @param album Data to create an album entry in the database.
 */
export async function createNewAlbumEntryInDB(name: string, coverImageName: string) {
  const albumId = new Types.ObjectId();
  const imageId = new Types.ObjectId();

  const position = await countAlbums() + 1;

  const albumEntity = new Album({
    _id: albumId,
    coverImageId: imageId,
    name,
    position
  });
  const imageEntity = new Image({
    _id: imageId,
    name: coverImageName,
    albumId,
    position: 1
  });

  const album = await albumEntity.save();
  const image = await imageEntity.save();

  console.debug(`New album entry: ${album}`);
  console.debug(`Cover image: ${image}`);
  return album;
}

/**
 * Checks if an album exists with a given name.
 *
 * @returns Promise<boolean> 
 */
export async function existsAlbum(name: string): Promise<boolean> {
  return !!await Album.exists({ name });
}

/**
 * Retrieves an Album entry from the database by id.
 *
 * @param id is the ID of the image that should be returned.
 * @returns Promise<IAlbum>
 * @throws The album with the id '${id}' does not exists.
 */
export async function getAlbumFromDB(id: Types.ObjectId): Promise<IAlbum> {
  const album = await Album.findById(id).exec();
  console.debug(`Album retrieved from db: ${album}`);

  if (!album) {
    throw Error(`The album with the id '${id}' does not exists.`)
  }

  return album as IAlbum;
}

/**
 * Counts the number of albums.
 *
 * @returns the number of albums `Promise<number>`.
 */
async function countAlbums() {
  return await Album.countDocuments();
}
