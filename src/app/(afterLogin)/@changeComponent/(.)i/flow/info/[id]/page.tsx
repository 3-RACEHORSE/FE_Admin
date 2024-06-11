import Advertisement from "@/components/pages/Advertisement";

export default function Page(props: any) {
  const pathName = props.params.id;
  console.log(props.params.id);
  return (
    <>
      <Advertisement />
    </>
  );
}
