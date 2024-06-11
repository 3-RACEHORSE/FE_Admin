import Advertisement from "@/components/pages/Advertisement";
import Donation from "@/components/pages/Donation";
import Payment from "@/components/pages/Payment";

export default function Page(props: any) {
  const pathName = props.params.id;
  console.log(props.params.id);
  return (
    <>
      {pathName === "one" && <Advertisement />}
      {pathName === "two" && <Payment />}
      {pathName === "three" && <Donation />}
    </>
  );
}
