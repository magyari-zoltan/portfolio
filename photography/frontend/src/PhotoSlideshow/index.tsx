import { FC, useEffect, useRef } from "react";
import { useLoaderData, useParams } from "react-router";
import { BASE_PATH } from "../Common/helpers/globals";
import Header from "../Common/components/Header";
import { IAlbum } from "./model/IAlbum";
import { IImage } from "./model/IImage";
import Footer from "../Common/components/Footer";
import NavigationToolbar from "../Common/components/NavigationToolbar";
import ImagePresenter from "./component/ImagePresenter";
import { scrollToTop } from "../Common/helpers/uiEffects";

type AlbumData = {
  album: IAlbum;
  images: IImage[];
}

interface PhotoSlideShowProps {
}

const PhotoSlideshow: FC<PhotoSlideShowProps> = () => {
  const mainRef = useRef<HTMLElement>(null);
  const data = useLoaderData() as AlbumData;
  const { imageId } = useParams();

  useEffect(() => scrollToTop(mainRef), []);

  return (
    <>
      <Header
        selected="My work"
        title={`${data.album.name}`}
        mainRef={mainRef}
        frontendServerPath={`${BASE_PATH}`}
      />

      <main ref={mainRef} className="container fit-content" >
        <NavigationToolbar previouseURL={`/album/${data.album._id}`} />
        <ImagePresenter displayedImageId={imageId} images={data.images} />
      </main >

      <Footer
        mainRef={mainRef}
        frontendServerPath={'/'}
      />
    </>
  );
}

export default PhotoSlideshow;
