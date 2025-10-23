"use client"

import { useState } from "react"
import FoodDetailModal from "./food-detail-modal"

const StarIcon = () => <span className="text-yellow-400">★</span>

const meals = [
  {
    id: 1,
    name: "Gourmet Burger",
    price: 12.99,
    image: "/premium-burger-with-cheese.jpg",
    description: "Juicy beef patty with premium toppings",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Caesar Salad",
    price: 9.99,
    image: "/fresh-caesar-salad-healthy.jpg",
    description: "Crisp romaine with homemade dressing",
    rating: 4.6,
  },
  {
    id: 3,
    name: "Margherita Pizza",
    price: 14.99,
    image: "/authentic-margherita-pizza.jpg",
    description: "Fresh mozzarella and basil on thin crust",
    rating: 4.9,
  },
  {
    id: 4,
    name: "Grilled Salmon",
    price: 18.99,
    image: "/grilled-salmon-fillet-lemon.jpg",
    description: "Fresh Atlantic salmon with seasonal vegetables",
    rating: 4.7,
  },
  {
    id: 5,
    name: "Pasta Carbonara",
    price: 13.99,
    image: "/creamy-pasta-carbonara-bacon.jpg",
    description: "Authentic Italian pasta with crispy bacon",
    rating: 4.8,
  },
  {
    id: 6,
    name: "Thai Green Curry",
    price: 15.99,
    image: "/thai-green-curry-chicken.jpg",
    description: "Aromatic curry with coconut milk and vegetables",
    rating: 4.7,
  },
]

export default function FeaturedMeals() {
  const [selectedMeal, setSelectedMeal] = useState<(typeof meals)[0] | null>(null)

  return (
    <section id="featured" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Meals</h2>
          <p className="text-xl text-gray-600">Discover our most popular dishes</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {meals.map((meal) => (
            <div
              key={meal.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer border-t-4 border-red-600"
              onClick={() => setSelectedMeal(meal)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={meal.image || "/placeholder.svg"}
                  alt={meal.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{meal.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{meal.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-red-600">${meal.price}</span>
                  <div className="flex items-center gap-1">
                    <StarIcon />
                    <span className="text-sm font-semibold text-gray-700">{meal.rating}</span>
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedMeal(meal)
                  }}
                  className="w-full py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition"
                >
                  Place Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedMeal && <FoodDetailModal meal={selectedMeal} onClose={() => setSelectedMeal(null)} />}
    </section>
  )
}
