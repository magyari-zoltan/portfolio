import { FC } from "react";
import { RouterProvider } from "react-router-dom"
import { Router } from "./Router";
import { Toaster } from "react-hot-toast";

const App: FC = () => {
  return (
    <>
      <RouterProvider router={Router} />
      <Toaster position="top-center" />
    </>
  )
}

export default App
