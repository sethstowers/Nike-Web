import React from "react";
import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      className="max-container flex justify-between items-center
    max-lg:flex-col gap-10"
      id="contact-us"
    >
      <h3
        className="text-4xl leading-[68px] lg:max-w-md 
      font-palanquin font-bold"
      >
        Sign Up for
        <span className="text-coral-red"> Updates</span> & Newsletter
      </h3>
      <div
        className="lg:max-w-[40%] w-full flex justify-between items-center 
      max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray 
      rounded-full"
      >
        <input className="input" type="email" placeholder="Enter your email" />
        <div
          className="flex max-sm:justify-end max-sm:w-full
        items-center"
        >
          <Button label="Sign Up" fullWidth/>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
