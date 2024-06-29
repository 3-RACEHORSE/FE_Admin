import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  chat: ReactNode;
  chatRoom: ReactNode;

  post: ReactNode;
};
export default function Layout({ children, chat, chatRoom, post }: Props) {
  return (
    <div>
      {children}
      <div
        className="flex items-center justify-between w-full mt-28"
        style={{
          height: "580px",
          paddingLeft: "2.5%",
          paddingRight: "2.5%",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "57.3%",
            display: "flex",
            justifyContent: "space-between",
            padding: "0.5%",
            background: "#0000006e",
            borderRadius: "7px",
          }}
        >
          {chat}
          {chatRoom}
        </div>
        {post}
      </div>
    </div>
  );
}
