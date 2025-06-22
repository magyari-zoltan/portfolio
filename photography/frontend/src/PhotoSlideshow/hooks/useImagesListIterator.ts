import { useMemo } from "react";
import { IImage } from "../model/IImage"

export const useImageListIterator = (images: IImage[], currentImageId: string | undefined) => {
  const ordered = useMemo<IImage[]>(() => [...images].sort((a, b) => a.position - b.position), images);
  console.debug('useImageListIterator', { ordered });

  const currentImageIndex = useMemo(() => ordered.findIndex((image) => image._id === currentImageId), [ordered, currentImageId]);
  const prevImageIndex = useMemo(() => currentImageIndex > 0 ? currentImageIndex - 1 : null, [currentImageIndex]);
  const nextImageIndex = useMemo(() => currentImageIndex < ordered.length - 1 ? currentImageIndex + 1 : null, [currentImageIndex]);
  console.debug('useImageListIterator', { prevImageIndex, currentImageIndex, nextImageIndex });

  return {
    prevImage: prevImageIndex !== null ? ordered[prevImageIndex] : null,
    image: currentImageIndex !== null ? ordered[currentImageIndex] : null,
    nextImage: nextImageIndex !== null ? ordered[nextImageIndex] : null,
  }
}
