"use client";
import React from "react";

/**
 * PUBLIC_INTERFACE
 * SearchBar component with a search input and filter action button
 */
export default function SearchBar({ onFilter }: { onFilter?: () => void }) {
  return (
    <div className="flex gap-3 mt-5">
      <div className="flex-1 card rounded-20 px-4 h-14 flex items-center gap-3">
        <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="11" cy="11" r="7" stroke="#374151" strokeWidth="2" fill="none" />
          <line x1="16" y1="16" x2="22" y2="22" stroke="#374151" strokeWidth="2" />
        </svg>
        <input
          aria-label="Search"
          placeholder="Search"
          className="flex-1 outline-none bg-transparent text-[15px]"
        />
      </div>
      <button
        aria-label="Open filters"
        onClick={() => onFilter?.()}
        className="btn btn-primary h-14 aspect-square grid place-items-center rounded-20"
      >
        <span className="sr-only">Open filters</span>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M3 6h18M6 12h12M10 18h4" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}
