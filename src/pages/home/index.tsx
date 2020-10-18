import React from "react";
import HomeItem from "./HomeItem";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-home-gradient bg-home-color">
      <div className="">
        <div className="flex flex-wrap md:px-2">
          <HomeItem link="/hello-page" thumbnail={"hello-page-thumbnail.png"} />
          <HomeItem link="/hello-page" thumbnail={"hello-page-thumbnail.png"} />
          <HomeItem link="/hello-page" thumbnail={"hello-page-thumbnail.png"} />
          <HomeItem link="/hello-page" thumbnail={"hello-page-thumbnail.png"} />
          <HomeItem link="/hello-page" thumbnail={"hello-page-thumbnail.png"} />
          <HomeItem link="/hello-page" thumbnail={"hello-page-thumbnail.png"} />
          <HomeItem link="/hello-page" thumbnail={"hello-page-thumbnail.png"} />
          <HomeItem link="/hello-page" thumbnail={"hello-page-thumbnail.png"} />
          <HomeItem link="/hello-page" thumbnail={"hello-page-thumbnail.png"} />
        </div>
      </div>
    </div>
  );
}
