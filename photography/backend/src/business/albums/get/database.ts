import Album from "../../../database/collections/Album";
import { IAlbum } from "../../../model/IAlbum";

/**
 * Retrieves the list of albums from the database.
 *
 * @returns Promise<IAlbum[]>
 */
export async function getAlbumsFromDB(): Promise<IAlbum[]> {
  const albums = await Album.find().exec();
  console.debug(`Albums retrieved from db: ${albums}`);
  return albums;
}
