"use client";
import React from "react";

/**
 * PUBLIC_INTERFACE
 * MenuCard shows a playful food card with image, title and rating
 */
export default function MenuCard({
  title,
  image,
  rating,
}: {
  title: string;
  image: string;
  rating: number;
}) {
  return (
    <article className="card rounded-20 p-4 relative">
      <div className="w-full flex justify-center">
        <img
          src={image}
          alt={title}
          className="w-32 h-32 object-cover drop-shadow-md -mt-8"
        />
      </div>
      <div className="mt-2">
        <h3 className="text-[15px] font-semibold leading-tight">{title}</h3>
      </div>
      <div className="mt-3 flex items-center gap-1">
        <svg width="16" height="16" viewBox="0 0 20 20" fill="#F59E0B" aria-hidden="true">
          <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.954L10 0l2.951 5.956 6.561.954-4.756 4.635 1.122 6.545z" />
        </svg>
        <span className="text-sm font-semibold">{rating.toFixed(1)}</span>
      </div>
      <button className="btn btn-secondary mt-4 w-full">Add</button>
    </article>
  );
}
