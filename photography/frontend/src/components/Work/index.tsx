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

const Work: FC = () => {
  const data = useLoaderData() as WorkData;
  console.debug(data);

  return (
    <main className="container mx-auto mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
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
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 top-0 bg-black bg-opacity-60 p-2 transform translate-y-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-lg font-semibold">{album.name}</h3>
                </div>
              </div>
            )
          )
        }
      </div>
    </main>
  )
};

export default Work;
