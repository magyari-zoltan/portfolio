import Album from "../../../database/collections/Album";
import { IAlbum } from "../../../model/IAlbum";

/**
 * Creates a new album entry in the database.
 *
 * @param album Data to create an album entry in the database.
 */
export async function createNewAlbumEntryInDB(album: IAlbum) {
  const entity = new Album(album);
  console.debug(`New album entry: ${entity}`);
  return await entity.save();
}

/**
 * Checks if an album exists
 *
 * @returns Promise<boolean> 
 */
export async function existsAlbum(name: string): Promise<boolean> {
  return !!await Album.exists({ name });
}
