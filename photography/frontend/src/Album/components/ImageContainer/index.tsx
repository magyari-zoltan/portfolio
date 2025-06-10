import { FC } from "react";
import { useNavigate } from "react-router";
import { IImage } from "../../model/IImage";
import './index.css';

interface ImageContainerProps {
  images: IImage[];
  basePath: string;
}

const ImageContainer: FC<ImageContainerProps> = ({ images, basePath }) => {
  const navigate = useNavigate();

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
                onClick={() => navigate(`/album/${image.albumId}/slideshow/${image._id}`)}
              />
            </div>
          )
        )
      }
    </div>
  )
}

export default ImageContainer;
