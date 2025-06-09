import { FC, RefObject } from "react";
import { useNavigate } from "react-router";
import { IAlbum } from "../../model/IAlbum"
import "./index.css";

interface MainProps {
  albums: IAlbum[];
  basePath: string;
  albumContainerRef: RefObject<HTMLDivElement | null>;
}

const AlbumContainer: FC<MainProps> = ({ albums, basePath, albumContainerRef }) => {
  const navigate = useNavigate();

  return (
    <div ref={albumContainerRef} className="album-container">
      {
        albums.map(
          album => (
            <div
              key={album.coverImageName}
              className="album"
              onClick={() => navigate(`/album/${album._id}`)}
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
    </div >
  )
}

export default AlbumContainer;
