"use client";

import React, { useState } from "react";
import { submitFormData } from "@/api/submitFormData";
import { useFormHandling } from "@/hooks/useFormHandling";
import ImageUploadComponent from "@/components/tool/ImageUploadComponent";
import Modal from "@/components/pages/Modal";
import "cropperjs/dist/cropper.css";
import ImageCropperModal from "@/components/tool/ImageCropperModal";

interface ImageData {
  src: string;
  croppedSrc: string | null;
}

interface PostProps {
  authorization: any;
  uuid: any;
}

const Post: React.FC<PostProps> = ({ authorization, uuid }) => {
  //이미지 관련 상태훅
  const [images, setImages] = useState<ImageData[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(
    null
  );

  //모달 상태 관련훅
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  //formData 초기화 및 변화감지
  const { formData, handleFormChange } = useFormHandling();

  //최종전송
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitFormData(formData, images, authorization, uuid);
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
          onChange={handleFormChange}
          placeholder="Influencer UUID"
          className="w-2/5 px-2 py-1 border rounded-md border-[#00000000] focus:outline-none focus:border-blue-500 bg-[#0000006e] text-[#ffffff]"
        />
        <input
          type="text"
          name="influencerName"
          value={formData.influencerName}
          onChange={handleFormChange}
          placeholder="Influencer Name"
          className="w-3/5 px-1 py-0.8 ml-4 border rounded-md border-[#00000000] focus:outline-none focus:border-blue-500 bg-[#0000006e] text-[#ffffff]"
        />
      </div>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleFormChange}
        placeholder="Title"
        className="w-full px-2 py-1 mb-4 border rounded-md border-[#00000000] focus:outline-none focus:border-blue-500 bg-[#0000006e] text-[#ffffff]"
      />
      <textarea
        name="content"
        value={formData.content}
        onChange={handleFormChange}
        placeholder="Content"
        className="w-full h-30 px-2 py-1 mb-4 border rounded-md border-[#00000000] resize-none focus:outline-none focus:border-blue-500 bg-[#0000006e] text-[#ffffff]"
      ></textarea>
      <div className="flex justify-between w-full">
        <div
          className="w-32 text-center text-white text-sm"
          style={{ width: "33%" }}
        >
          <p>최대인원 수</p>
        </div>
        <div
          className="w-32 text-center text-white text-sm"
          style={{ width: "33%" }}
        >
          <p>시작가</p>
        </div>
        <div
          className="w-32 text-center text-white text-sm"
          style={{ width: "33%" }}
        >
          <p>단위가</p>
        </div>
      </div>
      <div className="flex justify-between w-full mb-4">
        <input
          type="text"
          name="numberOfEventParticipants"
          value={formData.numberOfEventParticipants}
          onChange={handleFormChange}
          placeholder="Number of Event Participants"
          className="w-1/3 px-2 py-1 border rounded-md border-[#00000000] focus:outline-none focus:border-blue-500 bg-[#0000006e] text-[#ffffff]"
        />
        <input
          type="text"
          name="startPrice"
          value={formData.startPrice}
          onChange={handleFormChange}
          placeholder="Start Price"
          className="w-1/3 px-2 py-1 ml-4 border rounded-md border-[#00000000] focus:outline-none focus:border-blue-500 bg-[#0000006e] text-[#ffffff]"
        />
        <input
          type="text"
          name="incrementUnit"
          value={formData.incrementUnit}
          onChange={handleFormChange}
          placeholder="Increment Unit"
          className="w-1/3 px-2 py-1 ml-4 border rounded-md border-[#00000000] focus:outline-none focus:border-blue-500 bg-[#0000006e] text-[#ffffff]"
        />
      </div>
      <div className="flex justify-between w-full mb-4">
        <input
          type="text"
          name="localName"
          value={formData.localName}
          onChange={handleFormChange}
          placeholder="Local Name"
          className="w-1/5 px-2 py-1 border rounded-md border-[#00000000] focus:outline-none focus:border-blue-500 bg-[#0000006e] text-[#ffffff]"
        />
        <input
          type="text"
          name="eventPlace"
          value={formData.eventPlace}
          onChange={handleFormChange}
          placeholder="Event Place"
          className="w-4/5 px-2 py-1 ml-4 border rounded-md border-[#00000000] focus:outline-none focus:border-blue-500 bg-[#0000006e] text-[#ffffff]"
        />
      </div>
      <div className="flex justify-between w-full">
        <div
          className="w-32 text-center text-white text-sm"
          style={{ width: "33%" }}
        >
          <p>행사시작시간</p>
        </div>
        <div
          className="w-32 text-center text-white text-sm"
          style={{ width: "33%" }}
        >
          <p>행사종료시간</p>
        </div>
        <div
          className="w-32 text-center text-white text-sm"
          style={{ width: "33%" }}
        >
          <p>경매시작시간</p>
        </div>
      </div>
      <div className="flex justify-between w-full mb-4">
        <input
          type="datetime-local"
          name="eventStartTime"
          value={formData.eventStartTime}
          onChange={handleFormChange}
          placeholder="Event Start Time"
          className="w-1/3 px-2 py-1 border rounded-md border-[#00000000] focus:outline-none focus:border-blue-500 bg-[#0000006e] text-[#ffffff]"
        />
        <input
          type="datetime-local"
          name="eventCloseTime"
          value={formData.eventCloseTime}
          onChange={handleFormChange}
          placeholder="Event Close Time"
          className="w-1/3 px-2 py-1 ml-4 border rounded-md border-[#00000000] focus:outline-none focus:border-blue-500 bg-[#0000006e] text-[#ffffff]"
        />
        <input
          type="datetime-local"
          name="auctionStartTime"
          value={formData.auctionStartTime}
          onChange={handleFormChange}
          placeholder="Auction Start Time"
          className="w-1/3 px-2 py-1 ml-4 border rounded-md border-[#00000000] focus:outline-none focus:border-blue-500 bg-[#0000006e] text-[#ffffff]"
        />
      </div>
      {/* 외부 이미지 편집 컴포넌트 */}
      <ImageUploadComponent
        images={images}
        setImages={setImages}
        setCurrentImageIndex={setCurrentImageIndex}
        setIsModalOpen={setIsModalOpen}
      />

      {/* cropper 모달 컴포넌트 */}
      <Modal isOpen={isModalOpen}>
        <ImageCropperModal
          isOpen={isModalOpen}
          images={images}
          currentImageIndex={currentImageIndex}
          setImages={setImages}
          setIsModalOpen={setIsModalOpen}
        />
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
