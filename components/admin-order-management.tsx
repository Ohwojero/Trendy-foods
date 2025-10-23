"use client"

import { useEffect, useState } from "react"
import { CheckCircle, Clock, Truck } from "lucide-react"

interface Order {
  id: string
  items: Array<{
    id: number
    name: string
    price: number
    quantity: number
  }>
  customer: {
    customerName: string
    email: string
    phone: string
    address: string
  }
  total: number
  timestamp: string
  status?: string
}

export default function OrderManagement() {
  const [orders, setOrders] = useState<Order[]>([])
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)

  useEffect(() => {
    const savedOrder = JSON.parse(localStorage.getItem("lastOrder") || "null")
    if (savedOrder) {
      setOrders([{ ...savedOrder, status: "pending" }])
    }
  }, [])

  const updateOrderStatus = (orderId: string, status: string) => {
    const updated = orders.map((order) => (order.id === orderId ? { ...order, status } : order))
    setOrders(updated)
  }

  const getStatusIcon = (status?: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="text-green-600" size={20} />
      case "in-progress":
        return <Truck className="text-blue-600" size={20} />
      default:
        return <Clock className="text-yellow-600" size={20} />
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Order Management</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Orders List */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            {orders.length === 0 ? (
              <div className="p-12 text-center text-gray-600">No orders yet</div>
            ) : (
              <div className="divide-y divide-gray-200">
                {orders.map((order) => (
                  <div
                    key={order.id}
                    onClick={() => setSelectedOrder(order)}
                    className={`p-6 cursor-pointer hover:bg-gray-50 transition ${selectedOrder?.id === order.id ? "bg-red-50" : ""}`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        {getStatusIcon(order.status)}
                        <div>
                          <p className="font-bold text-gray-900">Order #{order.id}</p>
                          <p className="text-sm text-gray-600">{order.customer.customerName}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-red-600">${order.total.toFixed(2)}</p>
                        <p className="text-xs text-gray-600 capitalize">{order.status || "pending"}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{new Date(order.timestamp).toLocaleString()}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Order Details */}
        {selectedOrder && (
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Order Details</h2>

            <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
              <div>
                <p className="text-sm text-gray-600">Customer</p>
                <p className="font-semibold text-gray-900">{selectedOrder.customer.customerName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <p className="font-semibold text-gray-900">{selectedOrder.customer.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Phone</p>
                <p className="font-semibold text-gray-900">{selectedOrder.customer.phone}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Address</p>
                <p className="font-semibold text-gray-900">{selectedOrder.customer.address}</p>
              </div>
            </div>

            <div className="mb-6 pb-6 border-b border-gray-200">
              <p className="text-sm font-semibold text-gray-900 mb-3">Items</p>
              <div className="space-y-2">
                {selectedOrder.items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      {item.name} x{item.quantity}
                    </span>
                    <span className="font-semibold text-gray-900">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <p className="text-sm font-semibold text-gray-900 mb-3">Status</p>
              <div className="space-y-2">
                {["pending", "in-progress", "completed"].map((status) => (
                  <button
                    key={status}
                    onClick={() => updateOrderStatus(selectedOrder.id, status)}
                    className={`w-full py-2 rounded-lg font-semibold transition capitalize ${
                      selectedOrder.status === status
                        ? "bg-red-600 text-white"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>

            <div className="text-right">
              <p className="text-sm text-gray-600 mb-1">Total</p>
              <p className="text-2xl font-bold text-red-600">${selectedOrder.total.toFixed(2)}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
