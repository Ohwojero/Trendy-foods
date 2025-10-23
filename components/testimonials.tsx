"use client"

import { useState, useEffect } from "react"

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

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Food Enthusiast",
    image: "/avatar-1.jpg",
    review:
      "Trendy Foods has completely changed my dining experience. The quality is exceptional and the delivery is always on time!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Business Owner",
    image: "/avatar-2.jpg",
    review:
      "I order from Trendy Foods at least twice a week. The flavors are incredible and the service is outstanding.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Student",
    image: "/avatar-3.jpg",
    review:
      "Best restaurant in the area! The prices are reasonable and the food is absolutely delicious. Highly recommended!",
    rating: 4.8,
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Corporate Executive",
    image: "/avatar-4.jpg",
    review: "Perfect for business lunches. The ambiance is great and the menu offers something for everyone.",
    rating: 4.9,
  },
  {
    id: 5,
    name: "Lisa Anderson",
    role: "Fitness Coach",
    image: "/avatar-5.jpg",
    review: "Love the healthy options! Trendy Foods makes it easy to eat well without sacrificing taste.",
    rating: 5,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600">Real reviews from real customers</p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => {
              const isVisible =
                index === current ||
                index === (current + 1) % testimonials.length ||
                index === (current + 2) % testimonials.length

              return (
                <div
                  key={testimonial.id}
                  className={`transition-all duration-500 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95 hidden"}`}
                >
                  <div className="bg-white rounded-xl p-8 h-full flex flex-col shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-lg ${i < Math.floor(testimonial.rating) ? "text-yellow-400" : "text-gray-300"}`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 flex-grow italic">"{testimonial.review}"</p>
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-red-600"
                      />
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Navigation */}
          <button
            onClick={prev}
            className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition shadow-lg"
          >
            <ChevronLeftIcon />
          </button>
          <button
            onClick={next}
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition shadow-lg"
          >
            <ChevronRightIcon />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition ${index === current ? "bg-red-600" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
