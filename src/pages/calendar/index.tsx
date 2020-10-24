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
        <div className="flex flex-1 flex-col h-full">
          <div className="px-10 py-5 text-6xl font-thin tracking-widest">Janvier</div>
          <div className="h-full bg-white px-10 pb-10 flex flex-col">
            {/* Header */}
            {/* Calendar rows */}
            <div className="flex-1 flex rounded-md">
              <div className="w-1/7 h-full bg-white border-t border-l rounded-tl-xl text-gray-300 border-collapse text-4xl text-right p-2 leading-5 border-gray-300">
                30
              </div>
              <div className="w-1/7 h-full bg-white border-t border-l text-gray-300 text-4xl text-right p-2 leading-5 border-gray-300">
                31
              </div>
              <div className="w-1/7 h-full bg-white border-t border-l text-gray-500 text-4xl text-right p-2 leading-5 border-gray-300">
                1
              </div>
              <div className="w-1/7 h-full bg-white border-t border-l text-gray-500 text-4xl text-right p-2 leading-5 border-gray-300">
                2
              </div>
              <div className="w-1/7 h-full bg-white border-t border-l text-gray-500 text-4xl text-right p-2 leading-5 border-gray-300">
                3
              </div>
              <div className="w-1/7 h-full bg-white border-t border-l text-gray-500 text-4xl text-right p-2 leading-5 border-gray-300">
                4
              </div>
              <div className="w-1/7 h-full bg-white border-t border-l border-r rounded-tr-xl text-gray-500 text-4xl text-right p-2 leading-5 border-gray-300">
                5
              </div>
            </div>
            <div className="flex-1 flex rounded-md">
              <div className="w-1/7 h-full bg-white border-t border-l text-gray-500 border-collapse text-4xl text-right p-2 leading-5 border-gray-300">
                6
              </div>
              <div className="w-1/7 h-full bg-white border-t border-l text-gray-500 text-4xl text-right p-2 leading-5 border-gray-300">
                7
              </div>
              <div className="w-1/7 h-full bg-white border-t border-l text-gray-500 text-4xl text-right p-2 leading-5 border-gray-300">
                8
              </div>
              <div className="w-1/7 h-full bg-white border-t border-l text-gray-500 text-4xl text-right p-2 leading-5 border-gray-300">
                9
              </div>
              <div className="w-1/7 h-full bg-white border-t border-l text-gray-500 text-4xl text-right p-2 leading-5 border-gray-300">
                10
              </div>
              <div className="w-1/7 h-full bg-white border-t border-l text-gray-500 text-4xl text-right p-2 leading-5 border-gray-300">
                11
              </div>
              <div className="w-1/7 h-full bg-white border-t border-l border-r text-gray-500 text-4xl text-right p-2 leading-5 border-gray-300">
                12
              </div>
            </div>
            <div className="flex-1 flex rounded-md">
              <div className="w-1/7 h-full bg-white border-t border-l text-gray-500 border-collapse text-4xl text-right p-2 leading-5 border-gray-300">
                13
              </div>
              <div className="w-1/7 h-full bg-white border-t border-l text-gray-500 text-4xl text-right p-2 leading-5 border-gray-300">
                14
              </div>
              <div className="w-1/7 h-full bg-white border-t border-l text-gray-500 text-4xl text-right p-2 leading-5 border-gray-300">
                15
              </div>
              <div className="w-1/7 h-full bg-white border-t border-l text-gray-500 text-4xl text-right p-2 leading-5 border-gray-300">
                16
              </div>
              <div className="w-1/7 h-full bg-white border-t border-l text-gray-500 text-4xl text-right p-2 leading-5 border-gray-300">
                17
              </div>
              <div className="w-1/7 h-full bg-white border-t border-l text-gray-500 text-4xl text-right p-2 leading-5 border-gray-300">
                18
              </div>
              <div className="w-1/7 h-full bg-white border-t border-l border-r text-gray-500 text-4xl text-right p-2 leading-5 border-gray-300">
                19
              </div>
            </div>
            <div className="flex-1 flex rounded-md">
              <div className="w-1/7 h-full bg-white border-t border-l text-gray-500 border-collapse text-4xl text-right p-2 leading-5 border-gray-300">
                20
              </div>
              <div className="w-1/7 h-full bg-white border-t border-l text-gray-500 text-4xl text-right p-2 leading-5 border-gray-300">
                21
              </div>
              <div className="w-1/7 h-full bg-white border-t border-l text-gray-500 text-4xl text-right p-2 leading-5 border-gray-300">
                22
              </div>
              <div className="w-1/7 h-full bg-white border-t border-l text-gray-500 text-4xl text-right p-2 leading-5 border-gray-300">
                23
              </div>
              <div className="w-1/7 h-full bg-white border-t border-l text-gray-500 text-4xl text-right p-2 leading-5 border-gray-300">
                24
              </div>
              <div className="w-1/7 h-full bg-white border-t border-l text-gray-500 text-4xl text-right p-2 leading-5 border-gray-300">
                25
              </div>
              <div className="w-1/7 h-full bg-white border-t border-l border-r text-gray-500 text-4xl text-right p-2 leading-5 border-gray-300">
                26
              </div>
            </div>
            <div className="flex-1 flex rounded-md">
              <div className="w-1/7 h-full bg-white border-t border-l border-b rounded-bl-xl text-gray-500 border-collapse text-4xl text-right p-2 leading-5 border-gray-300">
                27
              </div>
              <div className="w-1/7 h-full bg-white border-t border-l border-b text-gray-500 text-4xl text-right p-2 leading-5 border-gray-300">
                28
              </div>
              <div className="w-1/7 h-full bg-white border-t border-l border-b text-gray-500 text-4xl text-right p-2 leading-5 border-gray-300">
                29
              </div>
              <div className="w-1/7 h-full bg-white border-t border-l border-b text-gray-500 text-4xl text-right p-2 leading-5 border-gray-300">
                30
              </div>
              <div className="w-1/7 h-full bg-white border-t border-l border-b text-gray-500 text-4xl text-right p-2 leading-5 border-gray-300">
                31
              </div>
              <div className="w-1/7 h-full bg-white border-t border-l border-b text-gray-300 text-4xl text-right p-2 leading-5 border-gray-300">
                1
              </div>
              <div className="w-1/7 h-full bg-white border-t border-l border-b border-r rounded-br-xl text-gray-300 text-4xl text-right p-2 leading-5 border-gray-300">
                2
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
