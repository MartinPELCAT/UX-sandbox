import React from "react";
import { Link } from "react-router-dom";

type Props = {
  link: string;
  thumbnail: string;
};

export default function HomeItem({ link, thumbnail }: Props) {
  return (
    <div className="w-full md:w-1/2 lg:w-1/4 -mb-2 md:mt-2 lg:mt-4 p-2 xl:p-4">
      <Link to={link}>
        <div
          role="button"
          className="h-64 bg-white shadow-md rounded-md overflow-hidden hover:shadow-outline"
        >
          <div
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/pages/${thumbnail})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="h-full"
          ></div>
        </div>
      </Link>
    </div>
  );
}
