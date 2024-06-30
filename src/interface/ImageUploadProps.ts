interface ImageData {
  src: string;
  croppedSrc: string | null;
}

export interface ImageUploadProps {
  images: ImageData[];
  setImages: React.Dispatch<React.SetStateAction<ImageData[]>>;
  setCurrentImageIndex: React.Dispatch<React.SetStateAction<number | null>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
