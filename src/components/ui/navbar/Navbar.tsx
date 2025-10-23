import Image from "next/image";
import Link from "next/link";
import React from "react";

const navlist = [
  {
    id: 1,
    title: "What we do",
    link: "/",
  },
  {
    id: 2,
    title: "What we do",
    link: "/",
  },
  {
    id: 3,
    title: "What we do",
    link: "/",
  },
  {
    id: 4,
    title: "What we do",
    link: "/",
  },
];

export const Navbar = () => {
  return (
    <header>
      <nav className="container m-auto">
        <div className="wrapper flex justify-between items-center w-full h-[56px]">
          <div className="">
            <Link href="/">
              <Image
                src="/logo/logo.svg"
                alt="logo"
                width={110}
                height={32}
                className="w-[110px] h-[32px] md:w-[180px] "
              />
            </Link>
          </div>
          <div
            id="nav-list"
            className="hidden lg:flex flex-col lg:flex-row justify-center items-center gap-[28px] bg-white lg:bg-transparent absolute lg:static top-[56px] left-0 w-full lg:w-auto h-screen lg:h-[56px]"
          >
            <ul className="flex flex-col lg:flex-row justify-between items-center gap-[27px]">
              <li className="nav-list">
                <Link href="#">What We Do</Link>
              </li>
            </ul>
            <ul>
              <li className="font-primary font-semibold text-[16px] text-[#47a08a] px-[24px] py-[4px] border-2 border-[#47a08a] hover:cursor-pointer">
                <a href="#">Get Started</a>
              </li>
            </ul>
          </div>
          {/* mobile responsive  */}
          <div className="block lg:hidden" id="menuToggle">
            <Image
              src="/icons/menu.png"
              alt="icon"
              width={28}
              height={28}
              className="w-[28px] h-[28px]"
              id="isActive"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};
