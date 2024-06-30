"use client";

import React, { useEffect, useState } from "react";
import styles from "@/styles/chat.module.scss";
import { useParams } from "next/navigation";
import getLastChatData from "@/api/getLastChatData";
import getInitialData from "@/api/getInitialData";
import { calculateRelativeTime } from "@/utils/calculateRelativeTime ";
import useSSEInChatList from "@/hooks/useSSEInChatList";
import { ChatListProps } from "@/interface/ChatListProps";

interface ChatListInfo {
  content: any;
  createdAt: any;
}

export default function ChatList({
  thumbnail,
  title,
  authorization,
  uuid,
  roomNumber,
}: ChatListProps) {
  // 선택 색상 유지 변수
  const isHighlighted = useParams().id === roomNumber;

  //총 채팅 갯수 상태 훅
  const [chatNum, setChatNum] = useState(0);

  //실시간 마지막 채팅 훅
  const [chatInfo, setChatInfo] = useState<ChatListInfo>({
    content: "",
    createdAt: "",
  });

  //총 채팅 갯수
  const fetchInitialDataAndUpdate = async () => {
    const data = await getInitialData(roomNumber, authorization, uuid);
    if (data) {
      setChatNum(data.count);
    }
  };

  //마지막 데이터 적용
  const fetchLastChatDataAndUpdate = async () => {
    const data = await getLastChatData(roomNumber, authorization, uuid);
    if (data) {
      setChatInfo({
        content: data.content,
        createdAt: data.createdAt,
      });
    }
  };

  //총 채팅 갯수 및 마지막 데이터 적용 마운트시 실행
  useEffect(() => {
    fetchInitialDataAndUpdate();
    fetchLastChatDataAndUpdate();
  }, []);

  //SSE연결
  useSSEInChatList(roomNumber, authorization, uuid, setChatInfo, setChatNum);

  return (
    <div
      className={`${styles["chatListContainer"]} ${
        isHighlighted ? styles["highlighted"] : ""
      }`}
    >
      <div style={{ display: "flex", width: "80%" }}>
        <div className={styles["thumbnail"]}>
          <img src={thumbnail} />
        </div>
        <div className={styles["textContainer"]}>
          <p className={styles["title"]}>{title}</p>
          <p className={styles["subtitle"]}>{chatInfo.content}</p>
        </div>
      </div>
      <div className={styles["updatedAt"]}>
        {chatInfo.createdAt !== 0 && calculateRelativeTime(chatInfo.createdAt)}
        {chatNum > 0 && (
          <p className={styles["count"]}>채팅 총 개수 : {chatNum}</p>
        )}
      </div>
    </div>
  );
}
