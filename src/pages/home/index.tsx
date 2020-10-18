import React from "react";
import { allPages } from "../../routes";
import HomeItem from "./HomeItem";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-home-gradient bg-home-color">
      <div className="">
        <div className="flex flex-wrap md:px-2">
          {allPages.map(
            ({ path, thumbnail }) =>
              thumbnail && (
                <HomeItem key={path} link={path} thumbnail={thumbnail} />
              )
          )}
        </div>
      </div>
    </div>
  );
}
