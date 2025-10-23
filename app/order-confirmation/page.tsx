"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"

const CheckCircleIcon = () => (
  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

const ClockIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

const MapPinIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const PhoneIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
)

interface Order {
  id: string
  items: Array<{
    id: number
    name: string
    price: number
    quantity: number
    image: string
  }>
  customer: {
    customerName: string
    email: string
    phone: string
    address: string
    city: string
    zipCode: string
    paymentMethod: string
  }
  subtotal: number
  tax: number
  deliveryFee: number
  total: number
  timestamp: string
}

export default function OrderConfirmation() {
  const searchParams = useSearchParams()
  const orderId = searchParams.get("orderId")
  const [order, setOrder] = useState<Order | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const savedOrder = JSON.parse(localStorage.getItem("lastOrder") || "null")
    if (savedOrder && savedOrder.id === orderId) {
      setOrder(savedOrder)
    }
    setIsLoading(false)
  }, [orderId])

  if (isLoading) {
    return (
      <main className="min-h-screen bg-white">
        <Navigation />
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading...</p>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  if (!order) {
    return (
      <main className="min-h-screen bg-white">
        <Navigation />
        <section className="py-12 md:py-16">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl p-12 text-center">
              <p className="text-xl text-gray-600 mb-6">Order not found</p>
              <Link
                href="/"
                className="inline-block px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  const estimatedDelivery = new Date(new Date(order.timestamp).getTime() + 30 * 60000)

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Success Message */}
          <div className="bg-white rounded-xl p-8 shadow-md mb-8 text-center">
            <div className="flex justify-center mb-4 text-green-500">
              <CheckCircleIcon />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
            <p className="text-xl text-gray-600 mb-4">Thank you for your order. We're preparing your delicious meal!</p>
            <p className="text-lg font-semibold text-red-600">Order ID: {order.id}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Delivery Time */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-3 text-red-600">
                <ClockIcon />
                <h3 className="font-semibold text-gray-900">Estimated Delivery</h3>
              </div>
              <p className="text-2xl font-bold text-gray-900">
                {estimatedDelivery.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </p>
              <p className="text-sm text-gray-600">Approximately 30 minutes</p>
            </div>

            {/* Delivery Address */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-3 text-red-600">
                <MapPinIcon />
                <h3 className="font-semibold text-gray-900">Delivery Address</h3>
              </div>
              <p className="text-gray-900 font-semibold">{order.customer.address}</p>
              <p className="text-sm text-gray-600">
                {order.customer.city}, {order.customer.zipCode}
              </p>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-3 text-red-600">
                <PhoneIcon />
                <h3 className="font-semibold text-gray-900">Contact</h3>
              </div>
              <p className="text-gray-900 font-semibold">{order.customer.phone || "Not provided"}</p>
              <p className="text-sm text-gray-600">{order.customer.email}</p>
            </div>
          </div>

          {/* Order Details */}
          <div className="bg-white rounded-xl p-8 shadow-md mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Details</h2>

            {/* Items */}
            <div className="mb-6 pb-6 border-b border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">Items</h3>
              <div className="space-y-4">
                {order.items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-grow">
                      <p className="font-semibold text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                      <p className="text-sm text-gray-600">${item.price.toFixed(2)} each</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Breakdown */}
            <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${order.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax (8%)</span>
                <span>${order.tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Delivery Fee</span>
                <span>{order.deliveryFee === 0 ? "FREE" : `$${order.deliveryFee.toFixed(2)}`}</span>
              </div>
            </div>

            {/* Total */}
            <div className="flex justify-between items-center mb-6">
              <span className="text-xl font-bold text-gray-900">Total Amount</span>
              <span className="text-3xl font-bold text-red-600">${order.total.toFixed(2)}</span>
            </div>

            {/* Payment Method */}
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Payment Method</p>
              <p className="font-semibold text-gray-900 capitalize">{order.customer.paymentMethod.replace("-", " ")}</p>
            </div>
          </div>

          {/* Customer Info */}
          <div className="bg-white rounded-xl p-8 shadow-md mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Customer Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-600 mb-1">Name</p>
                <p className="font-semibold text-gray-900">{order.customer.customerName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Email</p>
                <p className="font-semibold text-gray-900">{order.customer.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Phone</p>
                <p className="font-semibold text-gray-900">{order.customer.phone || "Not provided"}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Order Time</p>
                <p className="font-semibold text-gray-900">{new Date(order.timestamp).toLocaleString()}</p>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
            <h3 className="font-semibold text-blue-900 mb-3">What's Next?</h3>
            <ul className="space-y-2 text-blue-900">
              <li>✓ Your order has been confirmed and sent to our kitchen</li>
              <li>✓ We'll prepare your meal with care and attention to detail</li>
              <li>✓ Your order will be delivered within 30 minutes</li>
              <li>✓ You'll receive a confirmation email shortly</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/"
              className="flex-1 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition text-center"
            >
              Order More
            </Link>
            <Link
              href="/contact"
              className="flex-1 py-3 border border-gray-300 text-gray-900 rounded-lg font-semibold hover:bg-gray-50 transition text-center"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
