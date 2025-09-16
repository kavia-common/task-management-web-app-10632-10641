"use client";
import React from "react";

/**
 * PUBLIC_INTERFACE
 * Header component with app title and optional user avatar slot
 */
export default function Header() {
  /** This is the playful, gradient header with brand title */
  return (
    <header className="header-gradient rounded-28 px-6 py-5 flex items-center justify-between shadow-md">
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-2xl bg-white/20 flex items-center justify-center">
          <span className="text-white text-xl font-black">F</span>
        </div>
        <div>
          <h1 className="text-white text-2xl font-extrabold tracking-tight">Foodgo</h1>
          <p className="text-white/90 text-sm -mt-0.5">Order your favourite food!</p>
        </div>
      </div>
      <div className="w-12 h-12 rounded-2xl overflow-hidden bg-white/20">
        <img
          src="/assets/figmaimages/figma_image_1_54.png"
          alt="User avatar"
          className="w-full h-full object-cover"
        />
      </div>
    </header>
  );
}
