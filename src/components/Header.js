import React from "react";
import MenuItem from "./MenuItem";
import { IoMdHome } from "react-icons/io";
import { FaInfoCircle } from "react-icons/fa";
import Link from "next/link";
import DarkMode from "./DarkMode";

const Header = () => {
  return (
    <>
      <div className="flex justify-between mx-2 max-w-5xl sm:mx-auto items-center py-6">
        <div>
          <Link href="/">
            <h2 className="text-2xl">
              <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg">
                IMDb
              </span>
              <span className="text-xl hidden sm:inline">Clone</span>
            </h2>
          </Link>
        </div>
        <div className="flex">
          <DarkMode />
          <MenuItem title={"Home"} address={"/"} Icon={IoMdHome} />
          <MenuItem title={"About"} address={"/about"} Icon={FaInfoCircle} />
        </div>
      </div>
    </>
  );
};

export default Header;
