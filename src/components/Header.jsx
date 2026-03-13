import React from "react";
export const Header = () => {
  return (
    <div className="flex h-[68px] bg-linear-60 bg-white justify-between pl-4 pr-4 md:pl-8 md:pr-8 items-center text-black">
      <div className="text-3xl font-extrabold">TOM</div>
      <a href="" className="href">
        <img src="category.png" alt="" className="md:hidden" />
      </a>
      <div className="md:flex hidden items-center gap-5">
        <div className=" md:flex gap-4 hidden">
          <a href="" className="href">
            About
          </a>
          <a href="" className="href">
            Work
          </a>
          <a href="" className="href">
            Testimonials
          </a>
          <a href="" className="href">
            Contact
          </a>
        </div>
        <div className="md:flex gap-5 hidden">
          <a href="" className="href">
            <img src="iconsun.png" alt="" />
          </a>
          <button className="h-9 w-[136px] bg-black text-white rounded-2xl shadow-2xl">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
