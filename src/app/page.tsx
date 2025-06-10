import Link from "next/link";
import { Button } from "./_components/Button";
import Text from "./_components/Text";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-y-18 mt-15 min-h-[70dvh]">
      <div className="flex flex-col xl:w-7xl lg:w-full px-12 text-center">
        <Text className="xl:text-[2.5rem] lg:text-[2rem] text-[1.7rem] font-bold">
          Use Helpersaurus for FREE!
        </Text>
        <Text className="xl:text-[1.5rem] lg:text-[1rem] text-[0.8rem] font-medium">
          Instantly generate RESTful APIs from your JSON data and quickly
          convert your JavaScript objects to JSON format. No login required—just
          start using it!
        </Text>
      </div>
      <div className="flex justify-between gap-x-2.5">
        <Link href="/mockapi">
          <Button
            variant="default"
            className="lg:p-8 lg:text-[1rem] text-[0.6rem] p-6 cursor-pointer"
          >
            Mock API Endpoint
          </Button>
        </Link>
        <Link href="/jsonconverter">
          <Button
            variant="outline"
            className="lg:p-8 lg:text-[1rem] text-[0.6rem] p-6 cursor-pointer"
          >
            Convert JS Object to JSON
          </Button>
        </Link>
      </div>
    </div>
  );
}
