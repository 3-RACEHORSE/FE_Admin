import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  changeComponent: ReactNode;
  post: ReactNode;
  write: ReactNode;
};
export default function Layout({
  children,
  changeComponent,
  post,
  write,
}: Props) {
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
        {changeComponent}
        {post}
      </div>
    </div>
  );
}
