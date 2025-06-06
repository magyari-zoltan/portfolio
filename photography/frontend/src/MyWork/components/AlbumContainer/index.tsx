import { FC, RefObject } from "react";
import { Album } from "../../model/Album"
import "./index.css";

interface MainProps {
  albums: Album[];
  basePath: string;
  albumContainerRef: RefObject<HTMLDivElement | null>;
}

const AlbumContainer: FC<MainProps> = ({ albums, basePath, albumContainerRef }) => {
  return (
    <div ref={albumContainerRef} className="album-container">
      {
        albums.map(
          album => (
            <div key={album.coverImageName} className="album" >

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
  )
}

export default AlbumContainer;
