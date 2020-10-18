import React, { lazy } from "react";
import AHSAPage from "../pages/ahsa-page";

const HelloPage = lazy(() => import("../pages/hello-page"));
const HomePage = lazy(() => import("../pages/home"));

type Page = {
  thumbnail?: string;
  path: string;
  element: React.ReactElement;
};

export const allPages: Page[] = [
  {
    element: <HomePage />,
    path: "/",
  },
  {
    element: <HelloPage />,
    path: "/hello-page",
    thumbnail: "hello-page-thumbnail.png",
  },
  {
    element: <AHSAPage />,
    path: "/ahsa-page",
    thumbnail: "hello-page-thumbnail.png",
  },
];
