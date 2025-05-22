"use client";
import React from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="fixed bottom-0 left-0 right-0 mb-6 ">
      <div className="flex justify-center items-center  w-full">
        <div className="bg-secondary px-20 max-sm:px-10 py-6 flex gap-4 rounded-md shadow-md">
          <Button
            className="w-28 h-10"
            asChild
            variant={pathname === "/vote" ? "default" : "outline"}
          >
            <Link href={"/vote"}>Vote</Link>
          </Button>
          <Button
            className="w-28 h-10"
            asChild
            variant={pathname === "/results" ? "default" : "outline"}
          >
            <Link href={"/results"}>Results</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
