import Link from "next/link";

export default function DropdownMenu({ urlParam }: { urlParam: string }) {
  return (
    <div className="border-3 border-[#000] rounded-2xl overflow-hidden absolute bottom-[-100px] right-0">
      <div className="flex flex-col mt-[-5px] w-full">
        <Link
          href="/mockapi"
          className={`${
            urlParam == "mockapi" && "bg-[#E4E4E4]"
          } rounded-t-2xl  px-2 py-3`}
        >
          MockAPI
        </Link>
        <Link
          href="/jsonconverter"
          className={`${
            urlParam == "jsonconverter" && "bg-[#E4E4E4]"
          } rounded-b-2xl  px-2 py-3`}
        >
          JSONConverter
        </Link>
      </div>
    </div>
  );
}
