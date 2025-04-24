import { Types } from 'mongoose';

/**
 * Data type of the album stored in the database.
 */
export interface IAlbum {
  /**
   * The name under which the image is saved to the store.
   */
  coverImageId: Types.ObjectId;

  /**
   * The name of the album.
   */
  name: string;

  /**
   * Indicates the album’s position in the ordered list.
   */
  position: number;
}
