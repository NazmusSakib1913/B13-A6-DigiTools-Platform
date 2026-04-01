import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Stats from './components/Stats'
import ProductSection from './components/ProductSection'
import StepsSection from './components/StepsSection'
import PricingSection from './components/PricingSection'

function App() {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    setCartItems((prev) => {
      if (prev.find((item) => item.id === product.id)) return prev;
      return [...prev, product];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }} className="min-h-screen bg-gray-50">
      <ToastContainer position="top-right" autoClose={3000} />
      <Navbar cartCount={cartItems.length} />
      <Banner />
      <Stats />
      <ProductSection
        cartItems={cartItems}
        onAddToCart={addToCart}
        onRemoveFromCart={removeFromCart}
        onClearCart={clearCart}
      />
      <StepsSection />
      <PricingSection />

      {/* Placeholder — Footer coming soon */}
      <div className="flex items-center justify-center py-10">
        <p className="text-gray-400 text-sm">Footer coming soon...</p>
      </div>
    </div>
  )
}

export default App
