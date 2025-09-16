"use client";
import React from "react";

/**
 * PUBLIC_INTERFACE
 * BottomBar renders a playful bottom navigation with a central FAB
 */
export default function BottomBar({ onAdd }: { onAdd?: () => void }) {
  return (
    <div className="relative">
      <div
        className="rounded-t-3xl px-6 pt-8 pb-5 header-gradient"
        style={{ borderTopLeftRadius: 28, borderTopRightRadius: 28 }}
      >
        <div className="flex items-center justify-between text-white/90">
          <button className="opacity-90 hover:opacity-100 transition" aria-label="Home">
            <svg width="24" height="24" viewBox="0 0 24 24" stroke="white" fill="none" strokeWidth="2">
              <path d="M3 12l9-9 9 9" />
              <path d="M9 21V9h6v12" />
            </svg>
          </button>
          <button className="opacity-90 hover:opacity-100 transition" aria-label="Search">
            <svg width="24" height="24" viewBox="0 0 24 24" stroke="white" fill="none" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="M16 16l5 5" />
            </svg>
          </button>
          <div className="w-14" /> {/* spacer for FAB */}
          <button className="opacity-90 hover:opacity-100 transition" aria-label="Favorites">
            <svg width="24" height="24" viewBox="0 0 24 24" stroke="white" fill="none" strokeWidth="2">
              <path d="M12 21s-8-4.438-8-11a5 5 0 0110 0 5 5 0 0110 0c0 6.562-8 11-8 11z" />
            </svg>
          </button>
          <button className="opacity-90 hover:opacity-100 transition" aria-label="Profile">
            <svg width="24" height="24" viewBox="0 0 24 24" stroke="white" fill="none" strokeWidth="2">
              <circle cx="12" cy="7" r="4" />
              <path d="M6 21a6 6 0 0112 0" />
            </svg>
          </button>
        </div>
      </div>

      <button
        aria-label="Add new"
        onClick={() => onAdd?.()}
        className="btn btn-primary w-16 h-16 grid place-items-center rounded-full shadow-lg absolute left-1/2 -translate-x-1/2 -top-6"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" stroke="white" fill="none" strokeWidth="2">
          <path d="M12 5v14M5 12h14" />
        </svg>
      </button>
    </div>
  );
}
