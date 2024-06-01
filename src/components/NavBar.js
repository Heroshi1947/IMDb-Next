// import React from "react";
// import NavbarItem from "./NavbarItem";

// const NavBar = () => {
//   return (
//     <div className="flex justify-center bg-amber-100 dark:bg-gray-600 lg:text-lg p-4">
//       <NavbarItem title={"Trending"} param="fetchTrending" />
//       <NavbarItem title={"Top Rated"} param="fetchTopRated" />
//     </div>
//   );
// };

// export default NavBar;

"use client";
import React, { Suspense } from "react";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <div className="flex justify-center bg-amber-100 dark:bg-gray-600 lg:text-lg p-4">
      <Suspense fallback={<div>Loading...</div>}>
        <NavbarItem title={"Trending"} param="fetchTrending" />
        <NavbarItem title={"Top Rated"} param="fetchTopRated" />
      </Suspense>
    </div>
  );
};

export default Navbar;
