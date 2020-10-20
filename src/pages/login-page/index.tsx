import React from "react";
import BG from "./assets/bg.jpg";

// https://www.behance.net/gallery/104096999/Travel-Filter-UIUX-Concept?tracking_source=search_projects_recommended%7Cweb%20

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-stretch bg-gray-100">
      {/* Image side */}
      <div className="w-7/12 bg-teal-300 rounded-r-login-extra -my-2 overflow-hidden">
        <div
          style={{ backgroundImage: `url(${BG})` }}
          className="h-full w-auto bg-cover"
        />
      </div>
      <div className="w-5/12 flex">
        <div className="m-auto flex w-full">
          <div className="w-1/2 m-auto bg-white rounded-xl shadow-sm flex flex-col overflow-hidden">
            <div className="bg-sunset-gradient">
              <div className="text-2xl text-center font-bold p-3 text-white">
                Se connecter
              </div>
            </div>
            <div className="p-5 flex flex-col space-y-5">
              <div className="flex flex-col">
                <label className="text-gray-900 font-medium">Email</label>
                <input
                  className="px-3 py-2 border border-1 border-gray-400 rounded-lg"
                  placeholder="Email"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-900 font-medium">Password</label>
                <input
                  className="px-3 py-2  border border-1 border-gray-400 rounded-lg"
                  placeholder="Password"
                  type="password"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full py-2 text-center bg-sunset-color bg-sunset-gradient text-white font-semibold focus:outline-none focus:shadow-outline"
              >
                Se connecter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
