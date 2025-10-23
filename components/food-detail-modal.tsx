"use client"

import { useRouter } from "next/navigation"

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

interface FoodDetailModalProps {
  meal: {
    id: number
    name: string
    price: number
    image: string
    description: string
    rating: number
  }
  onClose: () => void
}

export default function FoodDetailModal({ meal, onClose }: FoodDetailModalProps) {
  const router = useRouter()

  const handlePayNow = () => {
    onClose()
    router.push(`/checkout?meal=${meal.id}&name=${encodeURIComponent(meal.name)}&price=${meal.price}`)
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-in fade-in">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom-4">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">{meal.name}</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition text-gray-700">
            <CloseIcon />
          </button>
        </div>

        <div className="p-6">
          <img
            src={meal.image || "/placeholder.svg"}
            alt={meal.name}
            className="w-full h-80 object-cover rounded-lg mb-6"
          />

          <div className="mb-6">
            <p className="text-gray-600 text-lg mb-4">{meal.description}</p>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl font-bold text-red-600">${meal.price}</span>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400">★</span>
                <span className="font-semibold text-gray-700">{meal.rating}</span>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 py-3 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 transition"
            >
              Cancel
            </button>
            <button
              onClick={handlePayNow}
              className="flex-1 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition transform hover:scale-105"
            >
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
