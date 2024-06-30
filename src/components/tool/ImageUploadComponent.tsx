"use client";

import React, { ChangeEvent } from "react";
import styles from "@/styles/wrtiePage.module.scss";
import { handleImageUpload } from "@/utils/imageHandlers";
import { deleteImageAtIndex } from "@/utils/deleteImageAtIndex";
import { ImageUploadProps } from "@/interface/ImageUploadProps";

const ImageUploadComponent: React.FC<ImageUploadProps> = ({
  images,
  setImages,
  setCurrentImageIndex,
  setIsModalOpen,
}) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleImageUpload(
      event,
      setImages,
      setCurrentImageIndex,
      setIsModalOpen,
      images
    );
  };

  const handleDeleteImage = (index: number) => {
    deleteImageAtIndex(images, index, setImages, setCurrentImageIndex);
  };

  return (
    <>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleInputChange}
        className={styles["fileInput"]}
      />
      <div className={styles["flex-container"]}>
        <ul className={styles["overflow-scroll"]}>
          {images.map((image, index) => (
            <div key={index} className={styles["imageContainer"]}>
              {image.croppedSrc ? (
                <img
                  src={image.croppedSrc}
                  alt={`Cropped ${index}`}
                  className={styles["imageObject"]}
                  onClick={() => handleDeleteImage(index)}
                />
              ) : null}
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ImageUploadComponent;
