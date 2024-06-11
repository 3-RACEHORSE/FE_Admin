import { BiSolidDonateHeart } from "react-icons/bi";

export default function StatusView() {
  return (
    <div
      className="h-40 rounded-lg bg-[#1e293B]  text-white p-3 flex flex-col justify-between"
      style={{ width: "30%" }}
    >
      <div className="flex justify-between font-bold text-gray-400 text-lg">
        <p className="flex justify-center items-center">Donation</p>
        <BiSolidDonateHeart size={40} />
      </div>
      <div className="flex justify-between font-bold text-white-400 text-3xl">
        <p>100,000,000</p>
      </div>
      <div className="flex justify-between font-bold text-white-400 text-sm bg-[#121822] rounded-lg">
        <button className="p-1 pl-4 pr-4 w-full">View And Edit</button>
      </div>
    </div>
  );
}
