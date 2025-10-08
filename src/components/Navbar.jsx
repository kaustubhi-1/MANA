"use client";
import Link from "next/link";
import React from "react";
import { RiMenu4Fill } from "react-icons/ri";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between bg-[#3d0528] items-center px-8 py-2 text-white">
        <div>15% off on $100+ Purchase</div>
        <div>Subscribe and Save 15%</div>
        <div>15% off on $100+ Purchase</div>
      </div>
      <div className=" bg-[#ffeff1] px-10 pt-[-14px] flex justify-between items-center">
        <div>
          <img src="/assets/logom.png" alt="" className="w-20" />
        </div>
        <div className="flex justify-between gap-6 text-md font-medium items-center">
          <Link href={"/"}>Flavours</Link>
          <Link href={"/"}>Shop</Link>
          <Link href={"/"}>Story</Link>
          <Link href={"/"}>Blog</Link>
          <Link href={"/"}>Community</Link>
        </div>
        <div className="flex gap-4 items-center justify-between">
          <Link href={"/"} className="font-medium">Cart (2)</Link>
          <Link href={"/"} className="bg-white p-2 rounded-full text-xl ">
            <RiMenu4Fill />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
