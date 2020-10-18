import React from "react";

export default function HelloPage() {
  return (
    <div className="relative h-screen flex">
      <div className="absolute inset-x-0 top-0 ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#F3F4F5"
            fillOpacity="1"
            d="M0,96L34.3,117.3C68.6,139,137,181,206,170.7C274.3,160,343,96,411,90.7C480,85,549,139,617,160C685.7,181,754,171,823,181.3C891.4,192,960,224,1029,213.3C1097.1,203,1166,149,1234,149.3C1302.9,149,1371,203,1406,229.3L1440,256L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="w-screen flex">
        <div className="m-auto animate-bounce">
          <span className=" md:text-6xl lg:text-7xl tracking-widest font-bold capitalize">
            Hello
          </span>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="from-teal-400 to-teal-500"
        >
          <path
            fill="#F3F4F5"
            fillOpacity="1"
            d="M0,96L34.3,117.3C68.6,139,137,181,206,170.7C274.3,160,343,96,411,90.7C480,85,549,139,617,160C685.7,181,754,171,823,181.3C891.4,192,960,224,1029,213.3C1097.1,203,1166,149,1234,149.3C1302.9,149,1371,203,1406,229.3L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
