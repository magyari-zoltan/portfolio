import { FC, useEffect, useRef } from "react";
import { useLoaderData } from "react-router";
import { BACKEND_BASE_PATH, BACKEND_SERVER_URL, BASE_PATH, FRONTEND_SERVER_URL } from "../Common/helpers/globals";
import Header from "../Common/components/Header";
import Footer from "../Common/components/Footer";
import { useResizeObserver } from "../Common/hooks/useResizeObserver";
import AlbumContainer from "./components/AlbumContainer";
import SelfIntroduction from "./components/SelfIntroduction";
import { IAlbum } from "./model/IAlbum";
import { scrollToTop } from "../Common/helpers/uiEffects";

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

  useEffect(() => scrollToTop(mainRef), []);

  return (
    <>
      <Header
        selected="My work"
        title=""
        mainRef={mainRef}
        frontendServerPath={`${FRONTEND_SERVER_URL}${BASE_PATH}`}
      />

      <main ref={mainRef} className="container">
        <SelfIntroduction
          width={width}
          scrollable={mainRef}
          scrollTo={albumContainerRef}
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
