import React from "react";
import "./main.css";

export default function FallbackPage() {
  return (
    <div className="min-h-screen bg-fallback-color bg-fallback-gradient flex">
      <div className="m-auto">
        <div className="border-loading-spinner w-20 h-20 border-4 rounded-full animate-spin"></div>
      </div>
    </div>
  );
}
