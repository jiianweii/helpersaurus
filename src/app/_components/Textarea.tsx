interface TextareaProps {
  data: string;
  setData: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
}

export default function Textarea({
  data,
  setData,
  placeholder = "Enter Your JSON Data Here...",
}: TextareaProps) {
  return (
    <textarea
      className="border-4 rounded-3xl border-black w-full resize-none p-4 lg:h-[40dvh] md:h-[30dvh] h-[20dvh] lg:text-[1.5rem] sm:text-[1rem] text-[0.8rem]"
      placeholder={placeholder}
      value={data}
      onChange={(e) => setData(e.target.value)}
    />
  );
}
