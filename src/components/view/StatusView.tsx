import Link from "next/link";
import { BiSolidDonateHeart } from "react-icons/bi";
import { MdPayment } from "react-icons/md";
import { RiAdvertisementFill } from "react-icons/ri";

interface Props {
  type: string;
}

export default function StatusView({ type }: Props) {
  return (
    <div
      className="h-40 rounded-lg bg-[#1e293B]  text-white p-3 flex flex-col justify-between"
      style={{ width: "30%" }}
    >
      <div className="flex justify-between font-bold text-gray-400 text-m">
        <p className="flex justify-center items-center">{type}</p>
        {type === "Advertisement" && <RiAdvertisementFill size={40} />}
        {type === "Payment" && <MdPayment size={40} />}
        {type === "Donation" && <BiSolidDonateHeart size={40} />}
      </div>
      <div className="flex justify-between font-bold text-white-400 text-3xl">
        <p>100,000,000</p>
      </div>
      <div className="flex justify-between font-bold text-white-400 text-sm bg-[#121822] rounded-lg">
        {type === "Advertisement" && (
          <Link href="/i/flow/info/one">
            <button className="p-1 pl-4 pr-4 w-full">View And Edit</button>
          </Link>
        )}
        {type === "Payment" && (
          <Link href="/i/flow/info/two">
            <button className="p-1 pl-4 pr-4 w-full">View And Edit</button>
          </Link>
        )}
        {type === "Donation" && (
          <Link href="/i/flow/info/three">
            <button className="p-1 pl-4 pr-4 w-full">View And Edit</button>
          </Link>
        )}
      </div>
    </div>
  );
}
