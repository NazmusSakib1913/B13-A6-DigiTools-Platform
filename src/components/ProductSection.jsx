import { useState } from 'react';
import { ShoppingCart, Package } from 'lucide-react';
import { toast } from 'react-toastify';
import ProductCard from './ProductCard';
import CartItem from './CartItem';
import products from '../data/products.json';

const ProductSection = ({ cartItems, onAddToCart, onRemoveFromCart, onClearCart }) => {
  const [activeTab, setActiveTab] = useState('products');

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    onClearCart();
    toast.success('🎉 Checkout successful! Your order has been placed.');
  };

  return (
    <section id="products" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            Premium Digital Tools
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveTab('products')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
              activeTab === 'products'
                ? 'bg-gradient-to-r from-violet-600 to-indigo-500 text-white shadow-md shadow-violet-200'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-violet-300 hover:text-violet-600'
            }`}
          >
            <Package size={16} />
            Products
          </button>

          <button
            onClick={() => setActiveTab('cart')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
              activeTab === 'cart'
                ? 'bg-gradient-to-r from-violet-600 to-indigo-500 text-white shadow-md shadow-violet-200'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-violet-300 hover:text-violet-600'
            }`}
          >
            <ShoppingCart size={16} />
            Cart
            {cartItems.length > 0 && (
              <span className={`min-w-[20px] h-5 px-1 rounded-full text-xs font-bold flex items-center justify-center ${
                activeTab === 'cart' ? 'bg-white text-violet-600' : 'bg-violet-600 text-white'
              }`}>
                {cartItems.length}
              </span>
            )}
          </button>
        </div>

        {/* Products View */}
        {activeTab === 'products' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                isInCart={cartItems.some((item) => item.id === product.id)}
              />
            ))}
          </div>
        )}

        {/* Cart View */}
        {activeTab === 'cart' && (
          <div className="max-w-2xl mx-auto">
            {cartItems.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">
                <div className="w-20 h-20 bg-violet-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingCart size={36} className="text-violet-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Your cart is empty</h3>
                <p className="text-gray-400 text-sm mb-6">Browse our tools and add some to your cart!</p>
                <button
                  onClick={() => setActiveTab('products')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-500 text-white font-semibold text-sm rounded-xl hover:from-violet-700 hover:to-indigo-600 transition-all duration-200"
                >
                  <Package size={15} /> Browse Products
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Cart Items */}
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onRemove={onRemoveFromCart}
                  />
                ))}

                {/* Total & Checkout */}
                <div className="bg-white rounded-2xl border border-violet-100 shadow-sm p-6 mt-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">Subtotal ({cartItems.length} item{cartItems.length !== 1 ? 's' : ''})</span>
                    <span className="text-2xl font-extrabold text-gray-900">${totalPrice}</span>
                  </div>
                  <p className="text-xs text-gray-400 mb-5">Taxes and fees may apply at checkout.</p>
                  <button
                    onClick={handleCheckout}
                    className="w-full py-3.5 bg-gradient-to-r from-violet-600 to-indigo-500 text-white font-bold rounded-xl hover:from-violet-700 hover:to-indigo-600 transition-all duration-200 shadow-lg hover:shadow-violet-200 text-sm"
                  >
                    Proceed to Checkout →
                  </button>
                  <button
                    onClick={() => setActiveTab('products')}
                    className="w-full mt-3 py-2.5 text-gray-500 text-sm font-medium hover:text-violet-600 transition-colors duration-200"
                  >
                    ← Continue Shopping
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductSection;
