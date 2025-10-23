"use client"

import type React from "react"

import { useState, useEffect } from "react"
import AdminSidebar from "@/components/admin-sidebar"
import MenuManagement from "@/components/admin-menu-management"
import OrderManagement from "@/components/admin-order-management"
import PaymentManagement from "@/components/admin-payment-management"

type AdminTab = "menu" | "orders" | "payments"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<AdminTab>("menu")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [showLoginForm, setShowLoginForm] = useState(true)

  useEffect(() => {
    const adminAuth = localStorage.getItem("adminAuthenticated")
    if (adminAuth === "true") {
      setIsAuthenticated(true)
      setShowLoginForm(false)
    }
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === "admin123") {
      setIsAuthenticated(true)
      setShowLoginForm(false)
      localStorage.setItem("adminAuthenticated", "true")
      setPassword("")
    } else {
      alert("Invalid password")
      setPassword("")
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setShowLoginForm(true)
    localStorage.removeItem("adminAuthenticated")
  }

  if (showLoginForm && !isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-2xl">TF</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Login</h1>
            <p className="text-gray-600 mt-2">Trendy Foods Management</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <p className="text-xs text-gray-500 mt-2">Demo password: admin123</p>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} onLogout={handleLogout} />

      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {activeTab === "menu" && <MenuManagement />}
          {activeTab === "orders" && <OrderManagement />}
          {activeTab === "payments" && <PaymentManagement />}
        </div>
      </div>
    </div>
  )
}
