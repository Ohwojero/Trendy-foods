"use client"

import Link from "next/link"
import { useState } from "react"

const FacebookIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25m3.662-1.162c-.822 0-1.5.678-1.5 1.5s.678 1.5 1.5 1.5 1.5-.678 1.5-1.5-.678-1.5-1.5-1.5m-7.162 1.162c-4.596 0-8.25 3.654-8.25 8.25s3.654 8.25 8.25 8.25 8.25-3.654 8.25-8.25-3.654-8.25-8.25-8.25m0 2.25c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6" />
  </svg>
)

const TwitterIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a10.6 10.6 0 01-9.5 5" />
  </svg>
)

const WelcomePopup = ({ message, onClose }: { message: string; onClose: () => void }) => (
  <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
    <div className="bg-white rounded-lg shadow-2xl p-8 max-w-sm mx-4 pointer-events-auto animate-in fade-in zoom-in duration-300">
      <div className="text-center">
        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 10h-2m0 0H8m4 0v2m0-2v-2m0 0h2m-2 0H8m4 0v2m0-2v-2"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Welcome!</h3>
        <p className="text-gray-600 mb-6">{message}</p>
        <button
          onClick={onClose}
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200"
        >
          Close
        </button>
      </div>
    </div>
  </div>
)

export default function Footer() {
  const [showWelcome, setShowWelcome] = useState(false)
  const [welcomeMessage, setWelcomeMessage] = useState("")

  const handleSocialClick = (platform: string) => {
    const messages: Record<string, string> = {
      facebook: "Thanks for following us on Facebook! Stay tuned for exclusive updates and promotions.",
      instagram: "Welcome to our Instagram! Check out our latest food photos and behind-the-scenes content.",
      twitter: "Thanks for connecting with us on Twitter! Follow for daily food tips and special announcements.",
    }
    setWelcomeMessage(messages[platform])
    setShowWelcome(true)
    setTimeout(() => setShowWelcome(false), 3000)
  }

  return (
    <footer className="bg-gray-900 text-white py-12">
      {showWelcome && <WelcomePopup message={welcomeMessage} onClose={() => setShowWelcome(false)} />}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Trendy Foods</h3>
            <p className="text-gray-400">Bringing people together through taste and trend.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@trendyfoods.com</li>
              <li>Address: 123 Food Street, NY 10001</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <button
                onClick={() => handleSocialClick("facebook")}
                className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition duration-200 transform hover:scale-110"
              >
                <FacebookIcon />
              </button>
              <button
                onClick={() => handleSocialClick("instagram")}
                className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition duration-200 transform hover:scale-110"
              >
                <InstagramIcon />
              </button>
              <button
                onClick={() => handleSocialClick("twitter")}
                className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition duration-200 transform hover:scale-110"
              >
                <TwitterIcon />
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Trendy Foods. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
