import React from "react";

export default function Calendar() {
  return (
    <div className="min-h-screen flex items-stretch p-10 bg-calendar">
      <div className="w-full bg-white rounded-login-extra shadow-sm flex overflow-hidden">
        <div className="w-1/4">
          <img
            src="https://images.unsplash.com/photo-1523546340043-9a9b68803329?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1600"
            alt="spring landscape"
            className="object-cover object-center h-full"
          />
        </div>
        <div className="w-3/4 bg-white p-10 flex flex-col">
          {/* Header */}
          <div className="p-10">col</div>
          {/* Calendar rows */}
          <div className="bg-teal-200 flex-1 flex rounded-md border-collapse">
            <div className="w-1/5 h-full bg-white border border-1 text-gray-300 border-collapse text-4xl text-right p-2 leading-5 border-gray-300">
              1
            </div>
            <div className="w-1/5 h-full bg-white border border-1 text-gray-300 text-4xl text-right p-2 leading-5 border-gray-300">
              2
            </div>
            <div className="w-1/5 h-full bg-white border border-1 text-gray-300 text-4xl text-right p-2 leading-5 border-gray-300">
              3
            </div>
            <div className="w-1/5 h-full bg-white border border-1 text-gray-300 text-4xl text-right p-2 leading-5 border-gray-300">
              4
            </div>
            <div className="w-1/5 h-full bg-white border border-1 text-gray-300 text-4xl text-right p-2 leading-5 border-gray-300">
              5
            </div>
          </div>
          <div className="bg-teal-200 flex-1 flex rounded-md">
            <div className="w-1/5 h-full bg-white border border-1 text-gray-300 text-4xl text-right p-2 leading-5 border-gray-300">
              1
            </div>
            <div className="w-1/5 h-full bg-white border border-1 text-gray-300 text-4xl text-right p-2 leading-5 border-gray-300">
              2
            </div>
            <div className="w-1/5 h-full bg-white border border-1 text-gray-300 text-4xl text-right p-2 leading-5 border-gray-300">
              3
            </div>
            <div className="w-1/5 h-full bg-white border border-1 text-gray-300 text-4xl text-right p-2 leading-5 border-gray-300">
              4
            </div>
            <div className="w-1/5 h-full bg-white border border-1 text-gray-300 text-4xl text-right p-2 leading-5 border-gray-300">
              5
            </div>
          </div>{" "}
          <div className="bg-teal-200 flex-1 flex rounded-md ">
            <div className="w-1/5 h-full bg-white border border-1 text-gray-300 text-4xl text-right p-2 leading-5 border-gray-300">
              1
            </div>
            <div className="w-1/5 h-full bg-white border border-1 text-gray-300 text-4xl text-right p-2 leading-5 border-gray-300">
              2
            </div>
            <div className="w-1/5 h-full bg-white border border-1 text-gray-300 text-4xl text-right p-2 leading-5 border-gray-300">
              3
            </div>
            <div className="w-1/5 h-full bg-white border border-1 text-gray-300 text-4xl text-right p-2 leading-5 border-gray-300">
              4
            </div>
            <div className="w-1/5 h-full bg-white border border-1 text-gray-300 text-4xl text-right p-2 leading-5 border-gray-300">
              5
            </div>
          </div>{" "}
          <div className="bg-teal-200 flex-1 flex rounded-md">
            <div className="w-1/5 h-full bg-white border border-1 text-gray-300 text-4xl text-right p-2 leading-5 border-gray-300">
              1
            </div>
            <div className="w-1/5 h-full bg-white border border-1 text-gray-300 text-4xl text-right p-2 leading-5 border-gray-300">
              2
            </div>
            <div className="w-1/5 h-full bg-white border border-1 text-gray-300 text-4xl text-right p-2 leading-5 border-gray-300">
              3
            </div>
            <div className="w-1/5 h-full bg-white border border-1 text-gray-300 text-4xl text-right p-2 leading-5 border-gray-300">
              4
            </div>
            <div className="w-1/5 h-full bg-white border border-1 text-gray-300 text-4xl text-right p-2 leading-5 border-gray-300">
              5
            </div>
          </div>{" "}
          <div className="bg-teal-200 flex-1 flex rounded-md">
            <div className="w-1/5 h-full bg-white border border-1 text-gray-300 text-4xl text-right p-2 leading-5 border-gray-300">
              1
            </div>
            <div className="w-1/5 h-full bg-white border border-1 text-gray-300 text-4xl text-right p-2 leading-5 border-gray-300">
              2
            </div>
            <div className="w-1/5 h-full bg-white border border-1 text-gray-300 text-4xl text-right p-2 leading-5 border-gray-300">
              3
            </div>
            <div className="w-1/5 h-full bg-white border border-1 text-gray-300 text-4xl text-right p-2 leading-5 border-gray-300">
              4
            </div>
            <div className="w-1/5 h-full bg-white border border-1 text-gray-300 text-4xl text-right p-2 leading-5 border-gray-300">
              5
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
