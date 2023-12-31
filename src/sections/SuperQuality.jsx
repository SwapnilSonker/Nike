import React from "react";
import { arrowRight } from "../assets/icons";
import Button from "../components/Button";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2
          className="font-palanquin text-4xl 
        capitalize lg:max-w-lg font-bold"
        >
          We provide you
          <br />
          <span className="text-coral-red mt-3 inline-block">Super </span>{" "}
          <span className="text-coral-red mt-3 inline-block"> Quality</span>{" "}
          Shoes
        </h2>
        <p className="info-text mt-4 lg:max-w-lg">
          Discover stylish nike arrivals, quality comfort, and innovation for
          your active life.Ensuring premium comfort and style our meticulously
          crafted footwear is designed to elevate your experience.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Ensuring premium comfort and style our meticulously crafted footwear
          is designed to elevate your experience.
        </p>
        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          className="object-contain"
          height={570}
          width={570}
        />
      </div>
    </section>
  );
};

export default SuperQuality;
