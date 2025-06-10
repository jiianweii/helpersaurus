import React from "react";
import Text from "../_components/Text";
import FakeApiForm from "../_ui/fakeApiForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create RESTful API endpoint with JSON",
};

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center gap-y-18 mt-15">
      <div className="flex flex-col xl:w-7xl lg:w-full px-12 text-center">
        <Text className="xl:text-[2.5rem] lg:text-[2rem] text-[1.7rem] font-bold">
          Create Your Own Mock API with Just a Few Clicks!
        </Text>
        <Text className="xl:text-[1.5rem] lg:text-[1rem] text-[0.8rem] font-medium">
          Upload your JSON data, and our app automatically generates a RESTful
          API endpoint that you can use to test and interact with your data.
          It&apos;s as simple as POST, GET, PATCH, and DELETE.
        </Text>
      </div>
      <FakeApiForm />
    </div>
  );
}
