import clsx from "clsx";
import React, { PropsWithChildren, useState } from "react";
import { Link } from "react-router-dom";
import ChevronDown from "../ChevronDown";

type Props = {
  text: string;
  to?: string;
};

export default function NavItem({
  text,
  children,
  to,
}: PropsWithChildren<Props>) {
  const [open, setOpen] = useState(false);

  if (to) {
    return (
      <Link to={to}>
        <li className="text-center p-2 hover:bg-gray-100 hover:text-gray-900 rounded-md flex">
          <span>{text}</span>
        </li>
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <li
        className={clsx(
          [open && "bg-gray-100 text-gray-900"],
          "text-center p-2 rounded-md flex relative"
        )}
      >
        <span>{text}</span> {children && <ChevronDown />}
      </li>
      <div className="origin-top-left absolute left-0 w-64 bg-white shadow-md rounded-md hover:rotate-90 border-red-700 text-black overflow-hidden">
        <span className={clsx([!open && "hidden"])}>{children}</span>
      </div>
    </div>
  );
}
