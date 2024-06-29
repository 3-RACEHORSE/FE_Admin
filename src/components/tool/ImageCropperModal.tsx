import React, { useRef } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import styles from "@/styles/wrtiePage.module.scss";
import { handleCrop } from "@/utils/imageHandlers";

interface ImageData {
  src: string;
  croppedSrc: string | null;
}

interface ImageCropperModalProps {
  isOpen: boolean;
  images: ImageData[];
  currentImageIndex: number | null;
  setImages: React.Dispatch<React.SetStateAction<ImageData[]>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ImageCropperModal: React.FC<ImageCropperModalProps> = ({
  isOpen,
  images,
  currentImageIndex,
  setImages,
  setIsModalOpen,
}) => {
  const cropperRef = useRef<any>(null);

  const closeModal = () => {
    setIsModalOpen(false);
    setImages((prevImages) => prevImages.slice(0, -1));
  };

  if (!isOpen || currentImageIndex === null || !images[currentImageIndex]) {
    return null;
  }

  return (
    <div className={styles["cropperContainer"]}>
      <Cropper
        src={images[currentImageIndex].src}
        style={{ height: "fit-content", width: "100%" }}
        initialAspectRatio={1}
        aspectRatio={currentImageIndex > 0 ? 1 : 2 / 3}
        guides={false}
        ref={cropperRef}
        zoomable={false}
      />
      <div className={styles["cropperBtnContainer"]}>
        <button
          onClick={() =>
            handleCrop(cropperRef, currentImageIndex, setImages, setIsModalOpen)
          }
          className={styles["cropButton1"]}
        >
          확인
        </button>
        <button onClick={closeModal} className={styles["cropButton2"]}>
          취소
        </button>
      </div>
    </div>
  );
};

export default ImageCropperModal;
