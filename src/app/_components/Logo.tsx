import Image from "next/image";
import Link from "next/link";
import LogoImg from "@/app/_images/icon.png";

export default function Logo() {
  return (
    <Link href="/" className="relative lg:size-24 md:size-18 size-12">
      <Image src={LogoImg} fill className="object-cover" alt="logo" />
    </Link>
  );
}
