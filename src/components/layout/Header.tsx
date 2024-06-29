"use client";

import logout from "@/utils/handleLogOut";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const handleLogoutClick = async () => {
    if (await logout()) {
      router.push("/login");
    }
  };

  return (
    <header className="bg-[#1e293b31] text-white">
      <div className="w-full flex justify-between items-center p-4">
        <div className="text-lg font-bold">ADMIN SYSTEM</div>
        <nav className="flex space-x-4">
          <div
            className="hover:bg-[#0000006d] bg-[#1e293b31] p-2 rounded-lg"
            onClick={handleLogoutClick}
          >
            로그아웃
          </div>
        </nav>
      </div>
    </header>
  );
}
