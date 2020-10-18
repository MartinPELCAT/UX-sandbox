import React from "react";

type Props = {
  text: string;
  // to: string;
};

export default function NavSubItem({ text }: Props) {
  return <div className="p-2 hover:bg-gray-300">{text}</div>;
}
