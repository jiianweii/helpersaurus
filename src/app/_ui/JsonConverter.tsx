"use client";

import React, { useState } from "react";
import Textarea from "../_components/Textarea";
import { Icon } from "@iconify/react";
import ClipboardArea from "../_components/ClipboardArea";

export default function JsonConverter() {
  const [data, setData] = useState("");
  return (
    <div className="flex justify-center items-center xl:w-6xl w-dvw px-4 gap-x-3">
      <Textarea
        data={data}
        setData={setData}
        placeholder="Enter Your JavaScript Object Here..."
      />
      <div className="flex flex-col">
        <Icon icon="formkit:arrowleft" />
        <Icon icon="formkit:arrowright" />
      </div>
      <ClipboardArea data={data} />
    </div>
  );
}
