"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export const DocNavigation = () => {
  const [navItem, setNavItem] = useState("version");

  function getNavItem(item: string) {
    setNavItem(item);
  }

  useEffect(() => {
    console.log(navItem);
  }, [navItem]);

  const DocsNav = [
    {
      id: 1,
      navItem: "Tentang kami",
      hash: "tentang-kami",
    },
    {
      id: 2,
      navItem: "Kebijakan privasi",
      hash: "kebijakan-privasi",
    },
    {
      id: 3,
      navItem: "Syarat & Ketentuan",
      hash: "syarat-&-ketentuan",
    },
    {
      id: 4,
      navItem: "Bantuan",
      hash: "bantuan",
    },
  ];

  return (
    <div className="flex flex-col gap-0.5 mt-4 items-start fixed pe-4">
      {DocsNav.map((item) => {
        return (
          <Link
            key={item.id}
            href={`#${item.hash}`}
            onClick={() => getNavItem(item.hash)}
            className={`py-2.5 hover:bg-primary/20 hover:text-primary dark:hover:text-primary xl:min-w-60 lg:min-w-52 min-w-full px-4 rounded-md text-base font-medium  ${item.hash === navItem
              ? "bg-primary text-white"
              : "text-black/60"
              }`}
          >
            {item.navItem}
          </Link>
        );
      })}
    </div>
  );
};
