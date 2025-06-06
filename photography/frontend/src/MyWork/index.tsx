import { FC, useRef } from "react";
import { useLoaderData } from "react-router";
import { Album } from "./model/Album";
import Header from "../Common/components/Header";
import { useResizeObserver } from "../Common/hooks/useResizeObserver";
import AlbumContainer from "./components/AlbumContainer";
import SelfIntroduction from "./components/SelfIntroduction";
import './index.css';
import Footer from "../Common/components/Footer";

const BACKEND_BASE_PATH = import.meta.env.VITE_BACKEND_BASE_PATH;
console.debug('BACKEND_BASE_PATH', BACKEND_BASE_PATH);

const BACKEND_SERVER_URL = import.meta.env.VITE_BACKEND_SERVER_URL;
console.debug('BACKEND_SERVER_URL', BACKEND_SERVER_URL);

const FRONTEND_SERVER_URL = import.meta.env.VITE_FRONTEND_SERVER_URL;
console.debug('FRONTEND_SERVER_URL', FRONTEND_SERVER_URL);

type MyWorkData = {
  albums: Album[];
}

const MyWork: FC = () => {
  const albumContainerRef = useRef<HTMLDivElement>(null);

  const mainRef = useRef<HTMLDivElement>(null);
  const { width } = useResizeObserver(mainRef);

  const data = useLoaderData() as MyWorkData;
  console.debug(data);

  const basePath = `${BACKEND_SERVER_URL}${BACKEND_BASE_PATH}`;
  const frontendServerPath = `${FRONTEND_SERVER_URL}`;

  return (
    <>
      <Header selected="My work" title="" basePath={basePath} />

      <main ref={mainRef} className="container">
        <SelfIntroduction
          width={width}
          refObject={albumContainerRef}
        />

        <AlbumContainer
          albums={data.albums}
          basePath={basePath}
          albumContainerRef={albumContainerRef}
        />
      </main>

      <Footer frontendServerPath={frontendServerPath} />
    </>
  )
};

export default MyWork;
