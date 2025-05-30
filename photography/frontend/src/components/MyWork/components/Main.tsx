import { FC } from "react";
import { Album } from "../model/Album"

interface MainProps {
  basePath: string;
  albums: Album[];
}

const Main: FC<MainProps> = ({ basePath, albums }) => (
  <main className="container">
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
  </main>
)

export default Main;
