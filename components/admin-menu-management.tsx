"use client"

import type React from "react"

import { useState, useEffect } from "react"

const PlusIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
)

const EditIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
    />
  </svg>
)

const TrashIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    />
  </svg>
)

interface MenuItem {
  id: number
  name: string
  price: number
  description: string
  image: string
}

export default function MenuManagement() {
  const [items, setItems] = useState<MenuItem[]>([])
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  })

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("menuItems") || "[]")
    setItems(savedItems)
  }, [])

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.price || !formData.description) {
      alert("Please fill in all fields")
      return
    }

    if (editingId) {
      const updated = items.map((item) =>
        item.id === editingId
          ? {
              ...item,
              name: formData.name,
              price: Number.parseFloat(formData.price),
              description: formData.description,
              image: formData.image,
            }
          : item,
      )
      setItems(updated)
      localStorage.setItem("menuItems", JSON.stringify(updated))
      setEditingId(null)
    } else {
      const newItem: MenuItem = {
        id: Date.now(),
        name: formData.name,
        price: Number.parseFloat(formData.price),
        description: formData.description,
        image: formData.image || "/placeholder.svg",
      }
      const updated = [...items, newItem]
      setItems(updated)
      localStorage.setItem("menuItems", JSON.stringify(updated))
    }

    setFormData({ name: "", price: "", description: "", image: "" })
    setShowForm(false)
  }

  const handleEdit = (item: MenuItem) => {
    setFormData({
      name: item.name,
      price: item.price.toString(),
      description: item.description,
      image: item.image,
    })
    setEditingId(item.id)
    setShowForm(true)
  }

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this item?")) {
      const updated = items.filter((item) => item.id !== id)
      setItems(updated)
      localStorage.setItem("menuItems", JSON.stringify(updated))
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Menu Management</h1>
        <button
          onClick={() => {
            setShowForm(!showForm)
            setEditingId(null)
            setFormData({ name: "", price: "", description: "", image: "" })
          }}
          className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
        >
          <PlusIcon />
          Add Item
        </button>
      </div>

      {showForm && (
        <div className="bg-white rounded-xl p-6 shadow-md mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">{editingId ? "Edit Item" : "Add New Item"}</h2>
          <form onSubmit={handleSave} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Item Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="e.g., Gourmet Burger"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Price</label>
                <input
                  type="number"
                  step="0.01"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="12.99"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Item description"
                rows={3}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Image URL</label>
              <input
                type="text"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="https://example.com/image.jpg"
              />
            </div>
            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition"
              >
                {editingId ? "Update Item" : "Add Item"}
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowForm(false)
                  setEditingId(null)
                  setFormData({ name: "", price: "", description: "", image: "" })
                }}
                className="flex-1 py-2 border border-gray-300 text-gray-900 rounded-lg font-semibold hover:bg-gray-50 transition"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-gray-900 mb-2">{item.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{item.description}</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xl font-bold text-red-600">${item.price.toFixed(2)}</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(item)}
                  className="flex-1 flex items-center justify-center gap-2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  <EditIcon />
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="flex-1 flex items-center justify-center gap-2 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                >
                  <TrashIcon />
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {items.length === 0 && !showForm && (
        <div className="bg-white rounded-xl p-12 text-center">
          <p className="text-gray-600 mb-4">No menu items yet. Add your first item to get started!</p>
        </div>
      )}
    </div>
  )
}
