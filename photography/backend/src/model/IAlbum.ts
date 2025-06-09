import { Types } from 'mongoose';

/**
 * Data type of the album stored in the database.
 */
export interface IAlbum {
  /**
   * The technical id of the album.
   */
  _id: Types.ObjectId;

  /**
   * Version
   */
  __v: number;

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
