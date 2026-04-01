import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'

function App() {
  const [cartItems, setCartItems] = useState([])

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }} className="min-h-screen bg-gray-50">
      <ToastContainer position="top-right" autoClose={3000} />
      <Navbar cartCount={cartItems.length} />
      <Banner />

      {/* Placeholder — more sections coming soon */}
      <div className="flex items-center justify-center py-20">
        <p className="text-gray-400 text-lg">More sections coming soon...</p>
      </div>
    </div>
  )
}

export default App
