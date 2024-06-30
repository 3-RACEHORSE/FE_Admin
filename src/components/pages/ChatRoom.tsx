"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";
import { EventSourcePolyfill } from "event-source-polyfill";
import styles from "@/styles/chat.module.scss";
import { convertUToKST } from "@/utils/convertUToKST";
import { submitChatData } from "@/api/submitChatData";
import useChatScroll from "@/hooks/useChatScroll";
import useSSEInChatRoom from "@/hooks/useSSEInChatRoom";

interface ChatProps {
  authorization: any;
  uuid: any;
  roomNumber: any;
}

interface ChatType {
  content: string;
  createdAt: string;
  handle: string;
  profileImage: string;
  uuid: string;
}

const ChatRoom: React.FC<ChatProps> = ({ authorization, uuid, roomNumber }) => {
  const [chatData, setChatData] = useState<ChatType[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");

  const { ref, inView } = useInView();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  //마운트시, 스크롤 변화
  const chatContainerRef = useChatScroll(chatData);

  const fetchListData = useCallback(
    async ({ pageParam = 0 }) => {
      const enterTime = new Date().toISOString();
      console.log(enterTime);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/chat-service/api/v1/authorization/chat/previous/${roomNumber}?enterTime=${enterTime}&page=${pageParam}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authorization}`,
            uuid: `${uuid}`,
          },
        }
      );

      const data = await res.json();
      const reversedData = data.previousChatWithMemberInfoDtos.reverse();

      setChatData((prevData) => [...reversedData, ...prevData]);
      return reversedData;
    },
    [roomNumber]
  );

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["message", "chat"],
    queryFn: fetchListData,
    initialPageParam: 0,
    staleTime: 0,
    gcTime: 0,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = lastPage.length ? allPages.length : undefined;
      return nextPage;
    },
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  //채팅방 SSE 연결
  useSSEInChatRoom(authorization, uuid, roomNumber, setChatData);

  //스크롤 최하단 이돟
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView();
  };

  //메시지 입력 변화 감지
  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(event.target.value);
  };

  //메시지 보내기 - 키보드 이벤트
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  //메시지 보내기
  const handleSendMessage = async () => {
    await submitChatData({ authorization, uuid, newMessage, roomNumber });
    setNewMessage("");
    scrollToBottom();
  };

  return (
    <div
      style={{
        width: "40%",
        height: "100%",
        background: "#00000060",
        borderRadius: "0px 7px 7px 0px",
      }}
    >
      <main className={styles.main} ref={chatContainerRef}>
        {chatData.map((chat, index) => {
          const isUserMessage = chat.uuid === uuid;
          const isSameHandleAsPrevious =
            index > 0 && chatData[index - 1].handle === chat.handle;

          return (
            <div
              key={index}
              id={`message-${index}`}
              ref={index === 0 ? ref : null}
              className={
                isUserMessage
                  ? `${styles.chatLayout} ${styles.chatLayoutMy}`
                  : styles.chatLayout
              }
            >
              {!isUserMessage && !isSameHandleAsPrevious && (
                <div className={styles.chatContainer}>
                  <div className={styles.profileImageContainer}>
                    <img
                      src={chat.profileImage}
                      alt={`${chat.handle}'s profile`}
                      className={styles.profileImage}
                    />
                  </div>
                  <div className={styles.chatInfo}>
                    <p className={styles.handle}>{chat.handle}</p>
                    <p className={styles.createdAt}>
                      {convertUToKST(chat.createdAt)}
                    </p>
                  </div>
                </div>
              )}
              <div
                className={
                  isUserMessage ? styles.chatContentMy : styles.chatContent
                }
              >
                {chat.content}
              </div>
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </main>

      <div className={styles.chatInput}>
        <input
          type="text"
          placeholder="메시지를 입력하세요..."
          value={newMessage}
          onChange={handleMessageChange}
          onKeyPress={handleKeyPress}
        />
        <div className={styles.sendBtnContainer} onClick={handleSendMessage}>
          <div className={styles.sendBtn}>✔️</div>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
