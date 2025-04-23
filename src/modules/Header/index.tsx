"use client";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
const Header = () => {
  const [isActive, setIsActive] = useState<Boolean>();
  const router = useRouter();
  const pathname = router.pathname;
  console.log("path", pathname);

  return (
    <header className="w-full h-[80px] bg-white right-0 flex justify-center items-center sticky top-0 !z-20">
      <div className="flex flex-row justify-between items-center w-[90%]">
        <Image
          priority
          src={"/assets/Baharan.svg"}
          alt="logo"
          width={100}
          height={60}
        />
        <div className="flex flex-row md:gap-2.5 gap-1 text-#666666 font-bold text-[16px]">
          <p
            className={`md:text-[16px] text-[14px] cursor-pointer md:px-4 px-2 py-2.5 ${
              pathname === "/" && "bg-[#FE4C63] rounded-3xl  !text-white"
            }`}
            onClick={() => {
              router.push("/");
            }}
          >
            Home
          </p>
          <p
            className={`md:text-[16px] text-[14px] cursor-pointer md:px-4 px-2 py-2.5 ${
              pathname === "/projects" && "bg-[#FE4C63] rounded-3xl !text-white"
            }`}
            onClick={() => {
              router.push("/projects");
            }}
          >
            Projects
          </p>
          <p
            className={`md:text-[16px] text-[14px] cursor-pointer md:px-4 px-2 py-2.5 ${
              pathname === "/about" && "bg-[#FE4C63] rounded-3xl !text-white"
            }`}
            onClick={() => {
              router.push("/about");
            }}
          >
            About
          </p>
        </div>
      </div>
    </header>
  );
};
export default Header;
