import { FC, useRef } from "react";
import { useLoaderData } from "react-router";
import { BACKEND_BASE_PATH, BACKEND_SERVER_URL, BASE_PATH, FRONTEND_SERVER_URL } from "../Common/helpers/globals";
import Header from "../Common/components/Header";
import Footer from "../Common/components/Footer";
import { useResizeObserver } from "../Common/hooks/useResizeObserver";
import AlbumContainer from "./components/AlbumContainer";
import SelfIntroduction from "./components/SelfIntroduction";
import { IAlbum } from "./model/IAlbum";

type MyWorkData = {
  albums: IAlbum[];
}

const MyWork: FC = () => {
  const albumContainerRef = useRef<HTMLDivElement>(null);

  const mainRef = useRef<HTMLDivElement>(null);
  const { width } = useResizeObserver(mainRef);

  const data = useLoaderData() as MyWorkData;
  console.debug(data);

  const basePath = `${BACKEND_SERVER_URL}${BACKEND_BASE_PATH}`;

  return (
    <>
      <Header
        selected="My work"
        title=""
        frontendServerPath={`${FRONTEND_SERVER_URL}${BASE_PATH}`}
      />

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

      <Footer frontendServerPath={`${FRONTEND_SERVER_URL}`} />
    </>
  )
};

export default MyWork;
