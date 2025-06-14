import { TIMEOUT_10_MINUTES } from "../../Common/helpers/constants";
import { BACKEND_BASE_PATH, BACKEND_SERVER_URL } from "../../Common/helpers/globals";
import { IAlbum } from "../model/IAlbum";
import { IImage } from "../model/IImage";

const albumDataMap = new Map<string, { album: IAlbum, images: IImage[] }>();
console.debug('Initialize loader module', albumDataMap);

export async function loadAlbumData({ params }: { params: any }) {
  const HEADERS = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const basePath = `${BACKEND_SERVER_URL}${BACKEND_BASE_PATH}`;
  const albumId = params.albumId;

  if (albumDataMap.has(albumId)) {
    const result = albumDataMap.get(albumId);
    console.info(`Images for the album with id (${albumId}) were loaded from cache successfully:`, result);
    return result;
  }

  const albumPromise = fetch(`${basePath}/albums/${albumId}`, HEADERS);
  const imagesPromise = fetch(`${basePath}/albums/${albumId}/images`, HEADERS);
  const [album, images] = await Promise.all([albumPromise, imagesPromise]);

  if (!album.ok) {
    console.error(`Failed to fetch album with id (${albumId})`, { status: album.status });
    throw new Response(`Failed to fetch album with id (${albumId})`, { status: album.status });
  }

  if (!images.ok) {
    console.error(`Failed to fetch album with id (${albumId})`, { status: images.status });
    throw new Response(`Failed to fetch album with id (${albumId})`, { status: images.status });
  }

  const result = { album: await album.json(), images: await images.json() };
  console.debug(`Images for the album with id (${albumId}) were fetched successfully:`, result);

  albumDataMap.set(albumId, result);
  setTimeout(() => albumDataMap.delete(albumId), TIMEOUT_10_MINUTES);
  return result;
}
