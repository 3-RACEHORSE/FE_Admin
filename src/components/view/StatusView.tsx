import { BiSolidDonateHeart } from "react-icons/bi";
import { MdPayment } from "react-icons/md";
import { RiAdvertisementFill } from "react-icons/ri";
import { StatusViewProps } from "@/interface/StatusViewProps";

export default function StatusView({ type, price }: StatusViewProps) {
  return (
    <div
      className="h-40 rounded-lg bg-[#0000006e]  text-white p-3 flex flex-col justify-between"
      style={{ width: "30%" }}
    >
      <div className="flex justify-between font-bold text-white-400 text-m">
        <p className="flex justify-center items-center">{type}</p>
        {type === "Advertisement" && (
          <RiAdvertisementFill size={40} color="white" />
        )}
        {type === "Payment" && <MdPayment size={40} color="white" />}
        {type === "Donation" && <BiSolidDonateHeart size={40} color="white" />}
      </div>
      <div className="flex justify-between font-bold text-white-400 text-4xl">
        <p>{price}</p>
      </div>
    </div>
  );
}
