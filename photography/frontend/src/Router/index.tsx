import { createBrowserRouter } from "react-router-dom"
import ErrorHandler from "../Common/components/ErrorHandler";
import { loadAlbumData } from "../Album/helpers/loaders";
import { loadMyWorkData } from "../MyWork/helpers/loaders";
import MyWork from "../MyWork";
import Album from "../Album";
import PhotoSlideshow from "../PhotoSlideshow";

const BACKEND_BASE_PATH = import.meta.env.VITE_BACKEND_BASE_PATH;
console.debug('BACKEND_BASE_PATH', BACKEND_BASE_PATH);

const BACKEND_SERVER_URL = import.meta.env.VITE_BACKEND_SERVER_URL;
console.debug('BACKEND_SERVER_URL', BACKEND_SERVER_URL);

export const Router = createBrowserRouter(
  [
    {
      path: '/',
      Component: MyWork,
      loader: loadMyWorkData,
      errorElement: <ErrorHandler />
    },
    {
      path: '/album/:albumId',
      Component: Album,
      loader: loadAlbumData,
      errorElement: <ErrorHandler />
    },
    {
      path: '/album/:albumId/slideshow/:imageId',
      Component: PhotoSlideshow,
      loader: loadAlbumData,
      errorElement: <ErrorHandler />
    }
  ],
  {
    basename: import.meta.env.VITE_BASE_PATH
  });
