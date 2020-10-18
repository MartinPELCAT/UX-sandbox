import React from "react";

type Props = {
  content: string;
  title: string;
};

export default function Article({ content, title }: Props) {
  return (
    <div className="bg-white rounded-md w-full">
      <div className="text-xl text-black font-semibold">{title}</div>
      <div className="text-base">{content}</div>
    </div>
  );
}
