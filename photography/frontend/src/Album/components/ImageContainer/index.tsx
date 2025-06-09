import { FC } from "react";
import { IImage } from "../../model/IImage";
import './index.css';

interface ImageContainerProps {
  images: IImage[];
  basePath: string;
}

const ImageContainer: FC<ImageContainerProps> = ({ images, basePath }) => {
  return (
    <div className="image-container">
      {
        images.map(
          image => (
            <div key={image._id} className="image-frame" >
              <img
                alt={image.name}
                src={`${basePath}/images/file/${image.name}`}
                className="image"
              />
            </div>
          )
        )
      }
    </div>
  )
}

export default ImageContainer;
