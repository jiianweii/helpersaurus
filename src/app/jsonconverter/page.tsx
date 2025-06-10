import { Metadata } from "next";
import Text from "../_components/Text";
import JsonConverter from "../_ui/JsonConverter";

export const metadata: Metadata = {
  title: "Convert JavaScript Object to JSON",
};

export default function page() {
  return (
    <div className="flex flex-col justify-center items-center gap-y-18 mt-15">
      <div className="flex flex-col xl:w-7xl lg:w-full px-12 text-center">
        <Text className="xl:text-[2.5rem] lg:text-[2rem] text-[1.7rem] font-bold">
          Quickly Convert JavaScript Object to JSON Data
        </Text>
        <Text className="xl:text-[1.5rem] lg:text-[1rem] text-[0.8rem] font-medium">
          Need a quick JSON representation of your JavaScript object? No
          problem! Simply paste your JavaScript object, and we&apos;ll instantly
          generate its JSON equivalent for you. Fast, easy, and hassle-free.
        </Text>
      </div>
      <JsonConverter />
    </div>
  );
}
