import React from "react";

const Header = () => {
  return (
    <header className="w-full  mx-auto flex justify-center items-center p-6 bg-white border border-red-600   lg:w-3/5 xl:justify-between">
      <div className="hidden xl:flex">
        <a href="" className="text-primary tracking-wide text-4xl">
          Bishwas.
        </a>
      </div>
      <nav className="flex items-center text-primary list-none space-x-4 sm:space-x-10 lg">
        <li className="text-[10px] tracking-tighter lg:text-3xl lg:tracking-wide">
          <a href="">Home</a>
        </li>
        <li className="text-xl tracking-tighter lg:text-3xl lg:tracking-wide">
          <a href="">About</a>
        </li>
        <li className="text-xl tracking-tighter lg:text-3xl lg:tracking-wide">
          <a href="">Portfolio</a>
        </li>
        <li className="text-xl tracking-tighter lg:text-3xl lg:tracking-wide">
          <a href="">Contact</a>
        </li>
      </nav>
    </header>
  );
};

export default Header;
