"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const ChevronLeftIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 19l-7-7 7-7"
    />
  </svg>
);

const ChevronRightIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.255.949c-1.238.503-2.335 1.236-3.356 2.259-1.02 1.02-1.756 2.119-2.259 3.359-.433 1.079-.675 2.23-.949 4.255v.004c.276 2.025.516 3.176.949 4.255.503 1.238 1.236 2.335 2.259 3.356 1.02 1.02 2.119 1.756 3.359 2.259 1.079.433 2.23.675 4.255.949h.004c2.025-.276 3.176-.516 4.255-.949 1.238-.503 2.335-1.236 3.356-2.259 1.02-1.02 1.756-2.119 2.259-3.359.433-1.079.675-2.23.949-4.255v-.004c-.276-2.025-.516-3.176-.949-4.255-.503-1.238-1.236-2.335-2.259-3.356-1.02-1.02-2.119-1.756-3.359-2.259-1.079-.433-2.23-.675-4.255-.949z" />
  </svg>
);

const heroSlides = [
  {
    id: 1,
    title: "Welcome to Trendy Foods",
    subtitle: "Delicious. Modern. Memorable.",
    image: "/gourmet-burger-restaurant.jpg",
  },
  {
    id: 2,
    title: "Taste the Difference",
    subtitle: "Fresh ingredients, bold flavors.",
    image: "/fresh-salad-healthy-food.jpg",
  },
  {
    id: 3,
    title: "Order Now",
    subtitle: "Fast delivery, amazing quality.",
    image: "/pizza-pasta-italian-food.jpg",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % heroSlides.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/1234567890?text=Hi%20Trendy%20Foods%2C%20I%20would%20like%20to%20place%20an%20order",
      "_blank"
    );
  };

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in drop-shadow-lg">
              {slide.title}
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 animate-fade-in drop-shadow-md">
              {slide.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <button
                onClick={handleWhatsApp}
                className="px-8 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
              >
                <WhatsAppIcon />
                Chat on WhatsApp
              </button>
              <Link
                href="#featured"
                className="px-8 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-block"
              >
                Place Order
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 hover:bg-white rounded-full transition text-red-600"
      >
        <ChevronLeftIcon />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 hover:bg-white rounded-full transition text-red-600"
      >
        <ChevronRightIcon />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === current ? "bg-red-600" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
