"use client";
import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import CategoryTabs from "../components/CategoryTabs";
import MenuCard from "../components/MenuCard";
import BottomBar from "../components/BottomBar";
import Sidebar from "../components/Sidebar";

export default function Home() {
  const [category, setCategory] = React.useState<"all" | "combos" | "sliders" | "classic">("all");

  const menuItems = [
    { title: "Cheeseburger Wendy's Burger", image: "/assets/figmaimages/figma_image_1_83.png", rating: 4.9 },
    { title: "Hamburger Veggie Burger", image: "/assets/figmaimages/figma_image_1_92.png", rating: 4.8 },
    { title: "Hamburger Chicken Burger", image: "/assets/figmaimages/figma_image_1_101.png", rating: 4.6 },
    { title: "Hamburger Fried Chicken Burger", image: "/assets/figmaimages/figma_image_1_110.png", rating: 4.5 },
  ];

  return (
    <main className="px-4 md:px-8 py-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-6">
          <div className="hidden md:block md:col-span-3 lg:col-span-2">
            <Sidebar />
          </div>
          <div className="col-span-12 md:col-span-9 lg:col-span-10">
            <div className="app-surface p-5">
              <Header />
              <SearchBar onFilter={() => console.log("Filters clicked")} />
              <CategoryTabs active={category} onChange={setCategory} />

              <section className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {menuItems.map((item) => (
                  <MenuCard
                    key={item.title}
                    title={item.title}
                    image={item.image}
                    rating={item.rating}
                  />
                ))}
              </section>

              <div className="mt-10">
                <BottomBar onAdd={() => console.log("Add action clicked")} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
