import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  changeComponent: ReactNode;
  postInfo: ReactNode;
};
export default function Layout({ children, changeComponent, postInfo }: Props) {
  return (
    <div>
      {children}
      <div
        className="flex items-center justify-between w-full mt-28"
        style={{ height: "350px", paddingLeft: "2.5%", paddingRight: "2.5%" }}
      >
        {changeComponent}
        {postInfo}
      </div>
    </div>
  );
}
