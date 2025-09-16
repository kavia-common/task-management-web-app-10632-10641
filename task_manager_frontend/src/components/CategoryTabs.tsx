"use client";
import React from "react";

type Category = "all" | "combos" | "sliders" | "classic";

/**
 * PUBLIC_INTERFACE
 * CategoryTabs renders selectable tabs and reports the currently active category
 */
export default function CategoryTabs({
  active,
  onChange,
}: {
  active: Category;
  onChange: (c: Category) => void;
}) {
  const tabs: { key: Category; label: string }[] = [
    { key: "all", label: "All" },
    { key: "combos", label: "Combos" },
    { key: "sliders", label: "Sliders" },
    { key: "classic", label: "Classic" },
  ];

  return (
    <div className="flex gap-3 mt-6">
      {tabs.map((t) => {
        const selected = active === t.key;
        return (
          <button
            key={t.key}
            onClick={() => onChange(t.key)}
            aria-pressed={selected}
            className={`px-5 h-12 rounded-20 font-semibold transition ${
              selected
                ? "text-white shadow-md"
                : "text-gray-600 bg-gray-100"
            }`}
            style={
              selected
                ? { background: "linear-gradient(135deg, var(--ocean-primary), var(--ocean-secondary))" }
                : undefined
            }
          >
            {t.label}
          </button>
        );
      })}
    </div>
  );
}
