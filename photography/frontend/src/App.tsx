import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const BASE_PATH = import.meta.env.VITE_BASE_PATH;
console.debug('BASE_PATH', { basepath: BASE_PATH });

const HelloWork: FC = () => (<> Hello Work </>);

const App: FC = () => {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        Component: HelloWork
      }
    ],
    {
      basename: BASE_PATH
    });

  return (
    <RouterProvider router={router} />
  )
}

export default App
