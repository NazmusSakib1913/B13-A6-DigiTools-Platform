import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'

function App() {
  const [cartItems, setCartItems] = useState([])

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }} className="min-h-screen bg-gray-50">
      <ToastContainer position="top-right" autoClose={3000} />
      <Navbar cartCount={cartItems.length} />

      {/* Placeholder — more sections coming soon */}
      <main className="flex items-center justify-center h-[80vh]">
        <p className="text-gray-400 text-lg">Sections coming soon...</p>
      </main>
    </div>
  )
}

export default App
