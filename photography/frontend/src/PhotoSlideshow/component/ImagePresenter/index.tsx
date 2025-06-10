import { FC } from "react";
import { BACKEND_BASE_PATH, BACKEND_SERVER_URL } from "../../../Common/helpers/globals";
import { IImage } from "../../model/IImage";
import './index.css';

interface ImagePresenterProps {
  image: IImage
}

const ImagePresenter: FC<ImagePresenterProps> = ({ image }) => {
  const basePath = `${BACKEND_SERVER_URL}${BACKEND_BASE_PATH}`;

  return (
    <div className="image-frame">
      <img
        alt={image.name}
        src={`${basePath}/images/file/${image.name}`}
        className="image"
      />
    </div>
  );
}

export default ImagePresenter;
