"use client";

import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa6";

import Image from "next/image";
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";

const Header = () => {
  // ============ PathName =============
  const path = usePathname();

  // ============ Clerk =============
  const { user, isSignedIn } = useUser();

  // ============ Rendering =============
  return (
    <div className="p-3 px-10 flex justify-between items-center borde shadow-lg fixed top-0 w-full z-10 bg-white">
      <div className="flex items-center gap-12">
        <Image
          src={"https://img.icons8.com/color/96/city-block.png"}
          alt="logo"
          width={60}
          height={60}
        />
        <ul className="hidden md:flex gap-10">
          <Link href="/">
            <li
              className={`${
                path === "/" ? "text-primary" : ""
              } hover:text-primary font-medium text-sm cursor-pointer`}
            >
              For Sale
            </li>
          </Link>
          <Link href="/for-rent">
            <li
              className={`${
                path === "/for-rent" ? "text-primary" : ""
              } hover:text-primary font-medium text-sm cursor-pointer`}
            >
              For Rent
            </li>
          </Link>
          <Link href="/agent-finder">
            <li
              className={`${
                path === "/agent-finder" ? "text-primary" : ""
              } hover:text-primary font-medium text-sm cursor-pointer`}
            >
              Agent Finder
            </li>
          </Link>
        </ul>
      </div>
      <div className="flex gap-3 items-center">
        <Button className="flex gap-2">
          <FaPlus className="h-5 w-5" /> Post Your AD
        </Button>
        {isSignedIn ? (
          <UserButton />
        ) : (
          <Link href={"/sign-in"}>
            <Button variant={"outline"}>Login</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
