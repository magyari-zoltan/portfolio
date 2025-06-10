import { FC, useEffect, useRef } from "react";
import { useLoaderData } from "react-router";
import { scrollToRefObject } from "../Common/helpers/uiEffects";
import { BACKEND_BASE_PATH, BACKEND_SERVER_URL, BASE_PATH, FRONTEND_SERVER_URL } from "../Common/helpers/globals";
import Header from "../Common/components/Header";
import NavigationToolbar from "../Common/components/NavigationToolbar";
import Footer from "../Common/components/Footer";
import { IAlbum } from "./model/IAlbum";
import { IImage } from "./model/IImage";
import ImageContainer from "./components/ImageContainer";

type AlbumData = {
  album: IAlbum;
  images: IImage[];
}

const Album: FC = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  const data = useLoaderData() as AlbumData;
  console.debug('Album data:', data);

  const basePath = `${BACKEND_SERVER_URL}${BACKEND_BASE_PATH}`;

  useEffect(() => scrollToRefObject(mainRef), []);


  return (
    <>
      <Header
        selected="My work"
        title={`${data.album.name}`}
        frontendServerPath={`${FRONTEND_SERVER_URL}${BASE_PATH}`}
      />

      <main ref={mainRef} className="container">
        <NavigationToolbar previouseURL="/" />

        <ImageContainer
          images={data.images}
          basePath={basePath}
        />
      </main>

      <Footer frontendServerPath={`${FRONTEND_SERVER_URL}`} />
    </>
  );
}

export default Album;
