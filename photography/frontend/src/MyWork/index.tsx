import { FC } from "react";
import './index.css';
import { useLoaderData } from "react-router";
import { Album } from "./model/Album";
import Main from "./components/Main";
import Header from "../Common/components/Header";

const BACKEND_BASE_PATH = import.meta.env.VITE_BACKEND_BASE_PATH;
console.debug('BACKEND_BASE_PATH', BACKEND_BASE_PATH);

const BACKEND_SERVER_URL = import.meta.env.VITE_BACKEND_SERVER_URL;
console.debug('BACKEND_SERVER_URL', BACKEND_SERVER_URL);

type WorkData = {
  albums: Album[];
}

const MyWork: FC = () => {
  const data = useLoaderData() as WorkData;
  console.debug(data);

  return (
    <>
      <Header
        selected="MyWork"
        basePath={`${BACKEND_SERVER_URL}${BACKEND_BASE_PATH}`} />
      <Main
        albums={data.albums}
        basePath={`${BACKEND_SERVER_URL}${BACKEND_BASE_PATH}`} />
    </>
  )
};

export default MyWork;
