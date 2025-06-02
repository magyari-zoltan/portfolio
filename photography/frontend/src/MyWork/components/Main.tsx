import { FC, useRef } from "react";
import { Camera, Instagram, Facebook, ChevronDown } from 'lucide-react';
import { Album } from "../model/Album"
import "./Main.css";
import { useTitleOpacity } from "../helpers/useTitleOpacity";
import { useResizeObserver } from "../../Common/hooks/useResizeObserver";

interface MainProps {
  albums: Album[];
  basePath: string;
}

const Main: FC<MainProps> = ({ albums, basePath }) => {
  const mainRef = useRef<HTMLDivElement>(null);

  const { width } = useResizeObserver(mainRef);
  const titleOpacity = useTitleOpacity(width);

  return (
    <main ref={mainRef} className="container">

      <section className="title" style={{ opacity: titleOpacity }}>
        <h2 >Hi! I'm Magyari Zoltán</h2>
        <p>I'm a portrait photographer based in Targu Mures / Romania</p>

        <div className="social-media">
          <Camera />
          <Instagram />
          <Facebook />
        </div>

        <ChevronDown />
      </section>

      <div className="album-container">
        {
          albums.map(
            album => (
              <div
                key={album.coverImageName}
                className="album"
              >
                <img
                  alt={album.coverImageName}
                  src={`${basePath}/images/file/${album.coverImageName}`}
                  className="img"
                />
                <div className="title">
                  <h3 className="name">{album.name}</h3>
                </div>
              </div>
            )
          )
        }
      </div>
    </main>
  )
}

export default Main;
