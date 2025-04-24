import { Types } from "mongoose";
import Album from "../../../database/collections/Album";
import Image from "../../../database/collections/Image";

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
 * Counts the number of albums.
 *
 * @returns the number of albums `Promise<number>`.
 */
async function countAlbums() {
  return await Album.countDocuments();
}
