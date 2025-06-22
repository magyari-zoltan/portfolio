import { FC } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { BACKEND_BASE_PATH, BACKEND_SERVER_URL } from "../../../Common/helpers/globals";
import { useImageListIterator } from "../../hooks/useImagesListIterator";
import { IImage } from "../../model/IImage";
import './index.css';

interface ImagePresenterProps {
  displayedImageId: string | undefined
  images: IImage[],
}

const ImagePresenter: FC<ImagePresenterProps> = ({ displayedImageId, images }) => {
  const basePath = `${BACKEND_SERVER_URL}${BACKEND_BASE_PATH}`;
  const { prevImage, image: currentImage, nextImage } = useImageListIterator(images, displayedImageId);
  const navigate = useNavigate();

  console.debug('ImagePresenter', { displayedImageId, images });
  console.debug('ImagePresenter', { prevImage, currentImage, nextImage });

  return (
    <div className="image-presenter">
      <div
        className={`link link-frame link-float prev ${prevImage === null ? 'disabled' : ''}`}
        onClick={() => {
          if (prevImage) {
            navigate(`/album/${prevImage.albumId}/slideshow/${prevImage._id}`);
          }
        }} >
        <ArrowLeft className="link" />
      </div>

      <img
        alt={currentImage ? currentImage.name : 'no image'}
        src={currentImage ? `${basePath}/images/file/${currentImage.name}` : ''}
        className="image"
      />

      <div
        className={`link link-frame link-float next ${nextImage === null ? 'disabled' : ''}`}
        onClick={() => {
          if (nextImage) {
            navigate(`/album/${nextImage.albumId}/slideshow/${nextImage._id}`);
          }
        }} >
        <ArrowRight className="link" />
      </div>
    </div >
  );
}

export default ImagePresenter;
