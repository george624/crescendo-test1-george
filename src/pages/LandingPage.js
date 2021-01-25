import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="font-raleway">
      <div className="bg h-screen">
        <div className="h-full flex flex-col justify-center items-center">
          <div className="mb-6">
            <h1 className="font-bold text-gray-600 text-5xl uppercase ">
              Flaffie's Kitchen
            </h1>
          </div>
          <div>
            <Link to="/menu">
              <button className="font-semibold focus:outline-none shadow-4xl rounded-md text-white px-6 py-4 uppercase bg-green-600">
                Start your tummy journey
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
