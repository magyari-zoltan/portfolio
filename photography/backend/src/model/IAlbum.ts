/**
 * Data type of the album stored in the database.
 */
export interface IAlbum {
  /**
   * The name of the album.
   */
  name: string;

  /**
   * The name under which the image is saved to the store.
   */
  image: string;
}
