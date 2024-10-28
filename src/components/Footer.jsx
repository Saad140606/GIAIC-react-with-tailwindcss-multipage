import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" mt-14 bg-secondary text-white">
      <div className="flex flex-col md:flex-row justify-between p-8 lg:px-28 md:px-16 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-2xl pb-4 text-uppercase text-primary">CarConnect</h1>
          <p className=" mb-2 text-sm">
          <span className=" text-primary">CarConnect</span> is your ultimate destination for buying and selling cars with ease and confidence.
           Our user-friendly platform connects buyers with quality vehicles and trustworthy sellers, ensuring a seamless 
           experience. Discover your perfect ride today with CarConnect, where every journey begins!
          </p>
        </div>
        <div>
          <h1 className=" font-semibold text-xl pb-4 pt-5 md:pt-0 text-uppercase text-primary">
            PAGE LINKS 
          </h1>
          <div className=" flex flex-col gap-2 font-medium">
            <Link
              to="/about"
              className=" hover:translate-x-3 transition duration-200 ease-linear"
            >
              About us
            </Link>
            <Link
              to="/cars"
              className=" hover:translate-x-3 transition duration-200 ease-linear"
            >
              Our Cars
            </Link>
            <Link
              to="/services"
              className=" hover:translate-x-3 transition duration-200 ease-linear"
            >
              Services
            </Link>
          </div>
        </div>

        <div>
          <h1 className=" text-uppercase text-primary font-semibold text-xl pb-4 pt-5 md:pt-0">
            USED CARS FOR SALE
          </h1>
          <div className=" flex flex-col gap-2 font-medium">
            <Link
              to="/"
              className=" hover:translate-x-3 transition duration-200 ease-linear"
            >
              Toyota Camry
            </Link>
            <Link
              to="/"
              className=" hover:translate-x-3 transition duration-200 ease-linear"
            >
              Chevrolet Corvette
            </Link>
            <Link
              to="/"
              className=" hover:translate-x-3 transition duration-200 ease-linear"
            >
              Volkswagen Golf
            </Link>
            <Link
              to="/"
              className=" hover:translate-x-3 transition duration-200 ease-linear"
            >
              Nissan Rogue
            </Link>
          </div>
        </div>

        <div>
          <h1 className=" text-uppercase text-primary font-semibold text-xl pb-4 pt-5 md:pt-0">
            Learn More
          </h1>
          <div className=" flex flex-col gap-2 font-medium">
            <Link
              to="/"
              className=" hover:translate-x-3 transition duration-200 ease-linear"
            >
              User-friendly
            </Link>
            <Link
              to="/"
              className=" hover:translate-x-3 transition duration-200 ease-linear"
            >
              Search and Filters
            </Link>
            <Link
              to="/"
              className=" hover:translate-x-3 transition duration-200 ease-linear"
            >
              Secure Payment
            </Link>
            <Link
              to="/"
              className=" hover:translate-x-3 transition duration-200 ease-linear"
            >
              Geolocation Services
            </Link>
          </div>
        </div>
      </div>
      <div>
    
      </div>
    </footer>
  );
};

export default Footer;
