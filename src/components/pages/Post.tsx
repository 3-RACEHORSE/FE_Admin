"use client";

import React, { useState, useRef } from "react";
import styles from "./wrtiePage.module.scss";
import { handleImageUpload, handleCrop } from "@/utils/imageHandlers";
import Modal from "@/components/pages/Modal";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { RiAdvertisementFill } from "react-icons/ri";

interface ImageData {
  src: string;
  croppedSrc: string | null;
}

const Post: React.FC = () => {
  const [formData, setFormData] = useState({
    influencerUuid: "",
    influencerName: "",
    title: "",
    content: "",
    numberOfEventParticipants: 0,
    localName: "",
    eventPlace: "",
    eventStartTime: "",
    eventCloseTime: "",
    auctionStartTime: "",
    startPrice: 0,
    incrementUnit: 0,
    thumbnail: "",
    images: [""],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formData);
    // try {
    //   const response = await axios.post('your-api-endpoint', formData);
    //   console.log('Response:', response.data);
    // } catch (error) {
    //   console.error('Error submitting form:', error);
    // }
  };

  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  const [images, setImages] = useState<ImageData[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(
    null
  );
  const cropperRef = useRef<any>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const deleteImage = (index: number) => {
    setImages((prevImages) => {
      // If there are more than 1 images and the index is 0, do not delete the image
      if (prevImages.length > 1 && index === 0) {
        return prevImages;
      }
      return prevImages.filter((_, i) => i !== index);
    });
    setCurrentImageIndex(null);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImageIndex(null);
    setImages((prevImages) => prevImages.slice(0, -1));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center p-3"
      style={{ height: "100%", justifyContent: "space-between" }}
    >
      <div className="flex justify-between w-full mb-4 mt-2">
        <input
          type="text"
          name="influencerUuid"
          value={formData.influencerUuid}
          onChange={handleChange}
          placeholder="Influencer UUID"
          className="w-2/5 px-2 py-1 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          name="influencerName"
          value={formData.influencerName}
          onChange={handleChange}
          placeholder="Influencer Name"
          className="w-3/5 px-1 py-0.8 ml-4 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        className="w-full px-2 py-1 mb-4 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <textarea
        name="content"
        value={formData.content}
        onChange={handleChange}
        placeholder="Content"
        className="w-full h-30 px-2 py-1 mb-4 border rounded-md border-gray-300 resize-none focus:outline-none focus:border-blue-500"
      ></textarea>
      <div className="flex justify-between w-full">
        <div
          style={{
            width: "32%",
            textAlign: "center",
            color: "gray",
            fontSize: "13px",
          }}
        >
          <p>최대인원 수</p>
        </div>
        <div
          style={{
            width: "32%",
            textAlign: "center",
            color: "gray",
            fontSize: "13px",
          }}
        >
          <p>시작가</p>
        </div>
        <div
          style={{
            width: "32%",
            textAlign: "center",
            color: "gray",
            fontSize: "13px",
          }}
        >
          <p>단위가</p>
        </div>
      </div>
      <div className="flex justify-between w-full mb-4">
        <input
          type="text"
          name="numberOfEventParticipants"
          value={formData.numberOfEventParticipants}
          onChange={handleChange}
          placeholder="Number of Event Participants"
          className="w-1/3 px-2 py-1 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          name="startPrice"
          value={formData.startPrice}
          onChange={handleChange}
          placeholder="Start Price"
          className="w-1/3 px-2 py-1 ml-4 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          name="incrementUnit"
          value={formData.incrementUnit}
          onChange={handleChange}
          placeholder="Increment Unit"
          className="w-1/3 px-2 py-1 ml-4 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="flex justify-between w-full mb-4">
        <input
          type="text"
          name="localName"
          value={formData.localName}
          onChange={handleChange}
          placeholder="Local Name"
          className="w-1/5 px-2 py-1 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          name="eventPlace"
          value={formData.eventPlace}
          onChange={handleChange}
          placeholder="Event Place"
          className="w-4/5 px-2 py-1 ml-4 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="flex justify-between w-full">
        <div
          style={{
            width: "32%",
            textAlign: "center",
            color: "gray",
            fontSize: "13px",
          }}
        >
          <p>행사시작시간</p>
        </div>
        <div
          style={{
            width: "32%",
            textAlign: "center",
            color: "gray",
            fontSize: "13px",
          }}
        >
          <p>행사종료시간</p>
        </div>
        <div
          style={{
            width: "32%",
            textAlign: "center",
            color: "gray",
            fontSize: "13px",
          }}
        >
          <p>경매시작시간</p>
        </div>
      </div>
      <div className="flex justify-between w-full mb-4">
        <input
          type="datetime-local"
          name="eventStartTime"
          value={formData.eventStartTime}
          onChange={handleChange}
          placeholder="Event Start Time"
          className="w-1/3 px-2 py-1 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <input
          type="datetime-local"
          name="eventCloseTime"
          value={formData.eventCloseTime}
          onChange={handleChange}
          placeholder="Event Close Time"
          className="w-1/3 px-2 py-1 ml-4 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <input
          type="datetime-local"
          name="auctionStartTime"
          value={formData.auctionStartTime}
          onChange={handleChange}
          placeholder="Auction Start Time"
          className="w-1/3 px-2 py-1 ml-4 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>
      {/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={(event) =>
          handleImageUpload(
            event,
            setImages,
            setCurrentImageIndex,
            setIsModalOpen,
            images
          )
        }
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
                  onClick={() => deleteImage(index)}
                />
              ) : null}
            </div>
          ))}
        </ul>
      </div>

      <Modal isOpen={isModalOpen}>
        {currentImageIndex !== null && images[currentImageIndex] && (
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
                  handleCrop(
                    cropperRef,
                    currentImageIndex,
                    setImages,
                    setIsModalOpen
                  )
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
        )}
      </Modal>
      <button
        type="submit"
        className="w-full px-4 py-2 mt-2 text-white bg-[#624BFF] rounded-md hover:bg-[#33338c]"
      >
        Submit
      </button>
    </form>
  );
};

export default Post;
