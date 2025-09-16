"use client";
import React from "react";

/**
 * PUBLIC_INTERFACE
 * Sidebar for navigation items
 */
export default function Sidebar() {
  const items = [
    { key: "dashboard", label: "Dashboard", icon: "🏠" },
    { key: "orders", label: "Orders", icon: "🧾" },
    { key: "favorites", label: "Favorites", icon: "⭐" },
    { key: "profile", label: "Profile", icon: "👤" },
  ];
  return (
    <aside className="sidebar rounded-24 p-4 h-full">
      <nav className="flex flex-col gap-2">
        {items.map((it) => (
          <button
            key={it.key}
            className="flex items-center gap-3 px-3 py-2 rounded-20 hover:bg-white transition text-left"
          >
            <span className="text-lg">{it.icon}</span>
            <span className="font-semibold">{it.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
