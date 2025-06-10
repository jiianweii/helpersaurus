"use client";

import Textarea from "../_components/Textarea";
import { Button } from "../_components/Button";
import { addData } from "../_lib/data-service";
import { generateId } from "../_utils/helper";
import { toast } from "sonner";
import Spinner from "../_components/Spinner";
import { useState } from "react";
import Text from "../_components/Text";

export default function FakeApiForm() {
  const [url, setUrl] = useState("");
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleDataSubmit() {
    setIsLoading(true);
    try {
      const jsonData = JSON.parse(data);
      const id = await addData(generateId(), jsonData);
      toast.success("Completed. Your API endpoint has been created.");
      setData("");
      setUrl("http://localhost:3000/mockapi/api/" + id);
    } catch (err) {
      console.error(err);
      toast.error("Invalid JSON data. Please try again.");
    }
    setIsLoading(false);
  }
  return (
    <div className="flex flex-col gap-y-8">
      <div className="flex flex-col xl:w-7xl w-dvw px-4">
        <Textarea data={data} setData={setData} />
      </div>
      <div className="flex flex-col justify-center items-center xl:w-7xl w-full gap-y-4">
        <Button
          variant="default"
          className="sm:p-8 sm:text-[1rem] text-[0.6rem] p-6 cursor-pointer"
          onClick={handleDataSubmit}
        >
          {isLoading ? <Spinner /> : "Create Endpoint"}
        </Button>
        {url && <Text className="text-[1.2rem]">{url}</Text>}
      </div>
    </div>
  );
}
