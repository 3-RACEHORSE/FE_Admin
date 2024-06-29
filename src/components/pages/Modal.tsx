import React from "react";
import styles from "@/styles/wrtiePage.module.scss";
import { ModalProps } from "@/interface/ModalProps";

export default function Modal({ isOpen, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div
        className="bg-[#ffffff28] p-5 rounded-lg relative max-w-full max-h-full overflow-y-auto"
        style={{ width: "500px" }}
      >
        {children}
      </div>
    </div>
  );
}
