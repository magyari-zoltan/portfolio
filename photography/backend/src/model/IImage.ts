import { Types } from 'mongoose';

/**
 * Data type of the image stored in the database.
 */
export interface IImage {
  /**
   * The id of the album that contains the image.
   */
  albumId: Types.ObjectId;

  /**
   * The name of the image.
   */
  name: string;

  /**
   * Indicates the image’s position in the ordered list.
   */
  position: number;
}
