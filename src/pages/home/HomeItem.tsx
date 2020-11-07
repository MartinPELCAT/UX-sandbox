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
          <img
            alt={thumbnail}
            src={`${process.env.PUBLIC_URL}/pages/${thumbnail}`}
            className="h-full w-full object-cover bg-no-repeat object-center"
          />
        </div>
      </Link>
    </div>
  );
}
