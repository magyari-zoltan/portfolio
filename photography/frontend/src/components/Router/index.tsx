import { createBrowserRouter } from "react-router-dom"
import MyWork from "../MyWork";
import ErrorHandler from "../Common/ErrorHandler";

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
          throw new Response('Failed to fetch albums', { status: response.status });
        }
        return { albums: await response.json() };
      },
      errorElement: <ErrorHandler />
    }
  ],
  {
    basename: import.meta.env.VITE_BASE_PATH
  });
