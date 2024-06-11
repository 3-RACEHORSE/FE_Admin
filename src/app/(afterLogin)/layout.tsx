import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  changeComponent: ReactNode;
  post: ReactNode;
  modal: ReactNode;
};
export default function Layout({
  children,
  changeComponent,
  post,
  modal,
}: Props) {
  return (
    <div>
      {children}
      <div
        className="flex items-center justify-between w-full mt-28"
        style={{ height: "350px", paddingLeft: "2.5%", paddingRight: "2.5%" }}
      >
        {changeComponent}
        {post}
      </div>

      {modal}
    </div>
  );
}
