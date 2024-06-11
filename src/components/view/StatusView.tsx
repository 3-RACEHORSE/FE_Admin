export default function StatusView() {
  return (
    <div
      className="h-40 rounded-lg bg-[#1e293B]  text-white p-3 flex flex-col justify-between"
      style={{ width: "30%" }}
    >
      <div className="flex justify-between font-bold text-gray-400 text-lg">
        <p>Donation</p>
        <p>Donation</p>
      </div>
      <div className="flex justify-between font-bold text-white-400 text-4xl">
        <p>Donation</p>
      </div>
      <div className="flex justify-between font-bold text-white-400 text-sm bg-[#121822] rounded-lg">
        <button className="p-1 pl-4 pr-4 w-full">View And Edit</button>
      </div>
    </div>
  );
}
