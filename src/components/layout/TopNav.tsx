import StautsView from "../view/StatusView";

export default function TopNav() {
  return (
    <nav className="bg-[#624BFF] text-white relative">
      <div className="max-w-screen-lg mx-auto flex justify-between items-end pt-6 pb-36 px-20"></div>
      <div className="absolute top-0 left-0 mt-8 ml-10 text-[23px] font-bold text-[#1e2938]">
        MEET PLUS
      </div>
      <button className="absolute top-0 right-0 mt-8 mr-10 bg-[#1e293B] px-4 py-2 text-[13px] rounded">
        Create New Participant
      </button>
      <section className="absolute -bottom-20 left-0 w-full flex justify-evenly">
        <StautsView type="Advertisement" />
        <StautsView type="Payment" />
        <StautsView type="Donation" />
      </section>
    </nav>
  );
}
