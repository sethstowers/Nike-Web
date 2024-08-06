import React, { useState } from "react";
import { headerLogo } from "../assets/images/";
import { hamburger } from "../assets/icons/";
import { navLinks } from "../constants";

const Nav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    if (isModalOpen) {
      setIsModalOpen(false);
      console.log("modal closed");
    } else {
      setIsModalOpen(true);
      console.log("modal opened");
    }
  };

  return (
    <header className="padding-x py-8 absolute z-[1] w-full">
      <div className={`bg-[#242424] h-[40vh] w-full absolute top-0 left-0 z-[100] animate-slide-in
      ${isModalOpen ? 'display-block' : 'hidden'}`}>
        <h1
          onClick={openModal}
          className="text-white absolute top-5 right-5 
    text-2xl cursor-pointer"
        >
          X
        </h1>
        <ul
          className="flex-col flex justify-center items-center
             gap-8 h-full"
        >
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="
              font-montserrat leading-normal 
              text-lg text-white
              "
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul
          className="flex-1 flex justify-center items-center
             gap-16 max-lg:hidden"
        >
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="
              font-montserrat leading-normal 
              text-lg text-slate-gray
              "
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img
            src={hamburger}
            alt=""
            height={25}
            width={25}
            onClick={openModal}
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
