import React, { lazy } from "react";
import AHSAPage from "../pages/ahsa-page";
import Animations from "../pages/animations";
import Calendar from "../pages/calendar";
import LoginPage from "../pages/login-page";

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
  {
    element: <LoginPage />,
    path: "/login-page",
    thumbnail: "login-thumbnail.png",
  },
  {
    element: <Animations />,
    path: "/animations",
    thumbnail: "animations",
  },
  {
    element: <Calendar />,
    path: "/calendar",
    thumbnail: "calendar-thumbnail.png",
  },
];
