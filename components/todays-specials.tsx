"use client"

import { useState } from "react"
import FoodDetailModal from "./food-detail-modal"

const ChevronLeftIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
)

const ChevronRightIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

const specials = [
  {
    id: 7,
    name: "Spicy Ramen Bowl",
    price: 11.99,
    image: "/spicy-ramen-noodles-bowl.jpg",
    description: "Authentic Japanese ramen with spicy broth",
    rating: 4.8,
  },
  {
    id: 8,
    name: "Truffle Fries",
    price: 8.99,
    image: "/truffle-fries-parmesan.jpg",
    description: "Crispy fries with truffle oil and parmesan",
    rating: 4.9,
  },
  {
    id: 9,
    name: "Chocolate Lava Cake",
    price: 7.99,
    image: "/chocolate-lava-cake-dessert.jpg",
    description: "Warm chocolate cake with molten center",
    rating: 5.0,
  },
]

export default function TodaysSpecials() {
  const [current, setCurrent] = useState(0)
  const [selectedMeal, setSelectedMeal] = useState<(typeof specials)[0] | null>(null)

  const next = () => setCurrent((prev) => (prev + 1) % specials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + specials.length) % specials.length)

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Today's Specials</h2>
          <p className="text-xl text-gray-600">Limited time offers you won't want to miss</p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specials.map((special, index) => (
              <div
                key={special.id}
                className={`transition-all duration-300 ${
                  index === current ? "opacity-100 scale-100" : "opacity-50 scale-95 hidden md:block"
                }`}
              >
                <div
                  className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all border-l-4 border-red-600"
                  onClick={() => setSelectedMeal(special)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={special.image || "/placeholder.svg"}
                      alt={special.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full font-bold">
                      Special
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{special.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{special.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-red-600">${special.price}</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedMeal(special)
                        }}
                        className="px-4 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition"
                      >
                        Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <button
            onClick={prev}
            className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
          >
            <ChevronLeftIcon />
          </button>
          <button
            onClick={next}
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
          >
            <ChevronRightIcon />
          </button>
        </div>
      </div>

      {selectedMeal && <FoodDetailModal meal={selectedMeal} onClose={() => setSelectedMeal(null)} />}
    </section>
  )
}
