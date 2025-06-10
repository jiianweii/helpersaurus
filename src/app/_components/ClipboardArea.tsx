import { toast } from "sonner";
import { isValidJsObj } from "../_utils/helper";

export default function ClipboardArea({ data }: { data: string }) {
  const jsonData = isValidJsObj(data);
  function saveToClipboard() {
    if (!jsonData) return;
    navigator.clipboard.writeText(jsonData);
    toast.success("Saved to clipboard");
  }

  return (
    <textarea
      rows={10}
      className="border-4 rounded-3xl border-black w-full resize-none p-4 lg:h-[40dvh] md:h-[30dvh] h-[20dvh] lg:text-[1.5rem] sm:text-[1rem] text-[0.8rem] cursor-pointer"
      placeholder="Waiting For JavaScript Object..."
      value={jsonData}
      onClick={saveToClipboard}
      disabled={!jsonData}
    />
  );
}
