import { FC } from "react";
import './index.css';
import { useLoaderData } from "react-router";
import { Album } from "./model/Album";

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
    <main className="">
      {
        data.albums.map(
          album => (
            <div
              key={album.coverImageName}
              className=""
            >
              <img
                alt={album.coverImageName}
                src={`${BACKEND_SERVER_URL}${BACKEND_BASE_PATH}/images/file/${album.coverImageName}`}
                className=""
              />
              <div className="">
                <h3 className="">{album.name}</h3>
              </div>
            </div>
          )
        )
      }
    </main>
  )
};

export default MyWork;
