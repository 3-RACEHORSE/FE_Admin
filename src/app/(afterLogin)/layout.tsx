import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  chat: ReactNode;
  post: ReactNode;
};
export default function Layout({ children, chat, post }: Props) {
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
        {chat}
        {post}
      </div>
    </div>
  );
}
