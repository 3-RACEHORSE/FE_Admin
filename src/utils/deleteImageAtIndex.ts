interface ImageData {
  src: string;
  croppedSrc: string | null;
}

export const deleteImageAtIndex = (
  images: ImageData[],
  index: number,
  setImages: React.Dispatch<React.SetStateAction<ImageData[]>>,
  setCurrentImageIndex: React.Dispatch<React.SetStateAction<number | null>>
) => {
  if (images.length > 1 && index === 0) {
    return;
  }

  const updatedImages = images.filter((_, i) => i !== index);

  setImages(updatedImages);
  setCurrentImageIndex(null);
};
