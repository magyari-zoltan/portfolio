import { createBrowserRouter } from "react-router-dom"
import MyWork from "../MyWork";
import ErrorHandler from "../Common/components/ErrorHandler";
import Album from "../Album";

const BACKEND_BASE_PATH = import.meta.env.VITE_BACKEND_BASE_PATH;
console.debug('BACKEND_BASE_PATH', BACKEND_BASE_PATH);

const BACKEND_SERVER_URL = import.meta.env.VITE_BACKEND_SERVER_URL;
console.debug('BACKEND_SERVER_URL', BACKEND_SERVER_URL);

export const Router = createBrowserRouter(
  [
    {
      path: '/',
      Component: MyWork,
      loader: async () => {
        const response = await fetch(`${BACKEND_SERVER_URL}${BACKEND_BASE_PATH}/albums`, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        if (!response.ok) {
          console.error('Failed to fetch albums', { status: response.status });
          throw new Response('Failed to fetch albums', { status: response.status });
        }
        const result = { albums: await response.json() };
        console.debug('Albums fetched successfully:', result);
        return result;
      },
      errorElement: <ErrorHandler />
    },
    {
      path: '/album/:albumId',
      Component: Album,
      loader: async ({ params }) => {
        const albumId = params.albumId;
        const response = await fetch(`${BACKEND_SERVER_URL}${BACKEND_BASE_PATH}/albums/${albumId}/images`, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        if (!response.ok) {
          console.error(`Failed to fetch album with id (${albumId})`, { status: response.status });
          throw new Response(`Failed to fetch album with id (${albumId})`, { status: response.status });
        }
        const result = { albums: await response.json() };
        console.debug(`Images for the album with id (${albumId}) were fetched successfully:`, result);
        return result;
      },
      errorElement: <ErrorHandler />
    }
  ],
  {
    basename: import.meta.env.VITE_BASE_PATH
  });
