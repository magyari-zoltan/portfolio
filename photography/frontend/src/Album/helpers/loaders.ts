import { BACKEND_BASE_PATH, BACKEND_SERVER_URL } from "../../Common/helpers/globals";

export async function loadAlbumData({ params }: { params: any }) {
  const HEADERS = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const basePath = `${BACKEND_SERVER_URL}${BACKEND_BASE_PATH}`;
  const albumId = params.albumId;

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
  return result;
}
