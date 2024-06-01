"use client";

import React, { useState, useEffect } from "react";
import { GiMoon } from "react-icons/gi";
import { LuSunMoon } from "react-icons/lu";
import { useTheme } from "next-themes";

const DarkMode = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mount, setMount] = useState(false);

  const currentTheme = theme === "system" ? systemTheme : theme;
  useEffect(() => setMount(true), []);

  return (
    <>
      {mount && currentTheme === "dark" ? (
        <LuSunMoon
          onClick={() => setTheme("light")}
          className="text-xl cursor-pointer hover:text-amber-500"
        />
      ) : (
        <GiMoon
          onClick={() => setTheme("dark")}
          className="text-xl cursor-pointer hover:text-amber-500"
        />
      )}
    </>
  );
};

export default DarkMode;
