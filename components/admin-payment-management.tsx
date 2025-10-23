"use client"

import { useEffect, useState } from "react"
import { CheckCircle, Clock } from "lucide-react"

interface Payment {
  id: string
  orderId: string
  amount: number
  method: string
  status: string
  timestamp: string
  customerName: string
}

export default function PaymentManagement() {
  const [payments, setPayments] = useState<Payment[]>([])

  useEffect(() => {
    const savedOrder = JSON.parse(localStorage.getItem("lastOrder") || "null")
    if (savedOrder) {
      const payment: Payment = {
        id: `PAY-${savedOrder.id}`,
        orderId: savedOrder.id,
        amount: savedOrder.total,
        method: savedOrder.customer.paymentMethod,
        status: "completed",
        timestamp: savedOrder.timestamp,
        customerName: savedOrder.customer.customerName,
      }
      setPayments([payment])
    }
  }, [])

  const totalRevenue = payments.reduce((sum, p) => sum + p.amount, 0)
  const completedPayments = payments.filter((p) => p.status === "completed").length

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Payment Management</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-md">
          <p className="text-gray-600 text-sm mb-2">Total Revenue</p>
          <p className="text-3xl font-bold text-red-600">${totalRevenue.toFixed(2)}</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-md">
          <p className="text-gray-600 text-sm mb-2">Completed Payments</p>
          <p className="text-3xl font-bold text-green-600">{completedPayments}</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-md">
          <p className="text-gray-600 text-sm mb-2">Total Transactions</p>
          <p className="text-3xl font-bold text-blue-600">{payments.length}</p>
        </div>
      </div>

      {/* Payments Table */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        {payments.length === 0 ? (
          <div className="p-12 text-center text-gray-600">No payments yet</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Payment ID</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Customer</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Amount</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Method</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {payments.map((payment) => (
                  <tr key={payment.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">{payment.id}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{payment.customerName}</td>
                    <td className="px-6 py-4 text-sm font-bold text-red-600">${payment.amount.toFixed(2)}</td>
                    <td className="px-6 py-4 text-sm text-gray-600 capitalize">{payment.method.replace("-", " ")}</td>
                    <td className="px-6 py-4 text-sm">
                      <div className="flex items-center gap-2">
                        {payment.status === "completed" ? (
                          <CheckCircle className="text-green-600" size={16} />
                        ) : (
                          <Clock className="text-yellow-600" size={16} />
                        )}
                        <span className="capitalize font-semibold text-gray-900">{payment.status}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {new Date(payment.timestamp).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
