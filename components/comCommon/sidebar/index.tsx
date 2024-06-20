import Link from "next/link";
import Image from "next/image";
import { dashboard } from "@/lib/router";
import profilePic from "@/public/logo.png";

export const Sidebar = () => {
  return (
    <div className="w-[260px] bg-white flex flex-col h-screen border-r border-gray-200">
      <div className="my-6 ml-6 flex justify-start">
        <Link href={dashboard}>
          <Image
            src={profilePic}
            alt="Intellifix"
            width={110}
            height={23}
          />
        </Link>
      </div>
    </div>
  );
};
