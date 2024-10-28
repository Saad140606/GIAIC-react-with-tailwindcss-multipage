import React from "react";
import WhyUsCard from "./WhyUsCard";
import { SiWebmoney } from "react-icons/si";
import { FaUsers, FaShippingFast } from "react-icons/fa";

const WhyUs = () => {
  const icon1 = <SiWebmoney className=" text-green-500 mx-auto" size={48} />;
  const icon2 = <FaUsers className=" text-green-500 mx-auto" size={48} />;
  const icon3 = (
    <FaShippingFast className=" text-green-500 mx-auto" size={48} />
  );

  return (
    <div className="flex flex-col justify-center container md:mt-16 py-10">
      <h1 className=" font-bold text-4xl text-center">
        Why choose <span className=" text-primary">CarConnect </span>?
      </h1>
<br />
      <p className=" text-center">
      Choose <span className=" text-primary">CarConnect </span> for a hassle-free car buying experience, connecting you with top-quality vehicles and trusted 
      sellers. Our platform prioritizes transparency, affordability, and convenience, making it easy to find your perfect
      car. With <span className=" text-primary">CarConnect </span>, every purchase is a step toward reliable and enjoyable driving.
      </p>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5">
        <WhyUsCard icon={icon1} title="Financing Options" />
        <WhyUsCard icon={icon2} title="Satisfied Customers" />
        <WhyUsCard icon={icon3} title="Fast & Easy Booking" />
      </div>
    </div>
  );
};

export default WhyUs;
