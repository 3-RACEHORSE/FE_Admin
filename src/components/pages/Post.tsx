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

    console.log(formData); // Assuming `formData` is an object containing your form data
    const thumbnail = images[0].croppedSrc;
    let croppedSrcArray = images
      .map((image) => image.croppedSrc)
      .filter((_, index) => index !== 0);

    if (thumbnail === null || croppedSrcArray.includes(null)) {
      return;
    }
    console.log(thumbnail, croppedSrcArray);
    console.log(formData);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/auctionpost-service/api/v1/auction-post`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJUb2tlblR5cGUiOiJhY2Nlc3MiLCJyb2xlIjoiUk9MRV9hZG1pbiIsInN1YiI6IjY5YTM3YzQ1LWNhMWYtNDdjMi04YmJmLWRlNmU5ODQyM2ViMCIsImlhdCI6MTcxOTY0NTA1NCwiZXhwIjoxNzE5OTA0MjU0fQ.MTxkC6fVX3OdCZjpNAF8sfXyTbfnAoHBEwDtw1Wh86s`,
            uuid: `69a37c45-ca1f-47c2-8bbf-de6e98423eb0`,
            // authorization: `Bearer ${authorization}`,
            // uuid: `${uuid}`,
          },
          body: JSON.stringify({
            influencerUuid: formData.influencerUuid,
            influencerName: formData.influencerName,
            title: formData.title,
            content: formData.content,
            numberOfEventParticipants: formData.numberOfEventParticipants,
            localName: formData.localName,
            eventPlace: formData.eventPlace,
            eventStartTime: formData.eventStartTime,
            eventCloseTime: formData.eventCloseTime,
            auctionStartTime: formData.auctionStartTime,
            startPrice: formData.startPrice,
            incrementUnit: formData.incrementUnit,
            thumbnail: thumbnail,
            images: croppedSrcArray,
          }),
        }
      );

      console.log("Response status:", response.status);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // const data = await response.json();
      // console.log("Response data:", data);
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle errors such as showing an error message to the user
    }
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
          className="w-2/5 px-2 py-1 border rounded-md border-[#00000000] focus:outline-none focus:border-blue-500 bg-[#0000006e] text-[#ffffff]"
        />
        <input
          type="text"
          name="influencerName"
          value={formData.influencerName}
          onChange={handleChange}
          placeholder="Influencer Name"
          className="w-3/5 px-1 py-0.8 ml-4 border rounded-md border-[#00000000] focus:outline-none focus:border-blue-500 bg-[#0000006e] text-[#ffffff]"
        />
      </div>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        className="w-full px-2 py-1 mb-4 border rounded-md border-[#00000000] focus:outline-none focus:border-blue-500 bg-[#0000006e] text-[#ffffff]"
      />
      <textarea
        name="content"
        value={formData.content}
        onChange={handleChange}
        placeholder="Content"
        className="w-full h-30 px-2 py-1 mb-4 border rounded-md border-[#00000000] resize-none focus:outline-none focus:border-blue-500 bg-[#0000006e] text-[#ffffff]"
      ></textarea>
      <div className="flex justify-between w-full">
        <div
          style={{
            width: "32%",
            textAlign: "center",
            color: "white",
            fontSize: "13px",
          }}
        >
          <p>최대인원 수</p>
        </div>
        <div
          style={{
            width: "32%",
            textAlign: "center",
            color: "white",
            fontSize: "13px",
          }}
        >
          <p>시작가</p>
        </div>
        <div
          style={{
            width: "32%",
            textAlign: "center",
            color: "white",
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
          className="w-1/3 px-2 py-1 border rounded-md border-[#00000000] focus:outline-none focus:border-blue-500 bg-[#0000006e] text-[#ffffff]"
        />
        <input
          type="text"
          name="startPrice"
          value={formData.startPrice}
          onChange={handleChange}
          placeholder="Start Price"
          className="w-1/3 px-2 py-1 ml-4 border rounded-md border-[#00000000] focus:outline-none focus:border-blue-500 bg-[#0000006e] text-[#ffffff]"
        />
        <input
          type="text"
          name="incrementUnit"
          value={formData.incrementUnit}
          onChange={handleChange}
          placeholder="Increment Unit"
          className="w-1/3 px-2 py-1 ml-4 border rounded-md border-[#00000000] focus:outline-none focus:border-blue-500 bg-[#0000006e] text-[#ffffff]"
        />
      </div>
      <div className="flex justify-between w-full mb-4">
        <input
          type="text"
          name="localName"
          value={formData.localName}
          onChange={handleChange}
          placeholder="Local Name"
          className="w-1/5 px-2 py-1 border rounded-md border-[#00000000] focus:outline-none focus:border-blue-500 bg-[#0000006e] text-[#ffffff]"
        />
        <input
          type="text"
          name="eventPlace"
          value={formData.eventPlace}
          onChange={handleChange}
          placeholder="Event Place"
          className="w-4/5 px-2 py-1 ml-4 border rounded-md border-[#00000000] focus:outline-none focus:border-blue-500 bg-[#0000006e] text-[#ffffff]"
        />
      </div>
      <div className="flex justify-between w-full">
        <div
          style={{
            width: "32%",
            textAlign: "center",
            color: "white",
            fontSize: "13px",
          }}
        >
          <p>행사시작시간</p>
        </div>
        <div
          style={{
            width: "32%",
            textAlign: "center",
            color: "white",
            fontSize: "13px",
          }}
        >
          <p>행사종료시간</p>
        </div>
        <div
          style={{
            width: "32%",
            textAlign: "center",
            color: "white",
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
          className="w-1/3 px-2 py-1 border rounded-md border-[#00000000] focus:outline-none focus:border-blue-500 bg-[#0000006e] text-[#ffffff]"
        />
        <input
          type="datetime-local"
          name="eventCloseTime"
          value={formData.eventCloseTime}
          onChange={handleChange}
          placeholder="Event Close Time"
          className="w-1/3 px-2 py-1 ml-4 border rounded-md border-[#00000000] focus:outline-none focus:border-blue-500 bg-[#0000006e] text-[#ffffff]"
        />
        <input
          type="datetime-local"
          name="auctionStartTime"
          value={formData.auctionStartTime}
          onChange={handleChange}
          placeholder="Auction Start Time"
          className="w-1/3 px-2 py-1 ml-4 border rounded-md border-[#00000000] focus:outline-none focus:border-blue-500 bg-[#0000006e] text-[#ffffff]"
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
