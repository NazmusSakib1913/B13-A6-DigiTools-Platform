import { useState } from 'react';
import { toast } from 'react-toastify';
import { Check, ShoppingCart } from 'lucide-react';

const tagStyles = {
  'best seller': 'bg-orange-100 text-orange-600',
  popular: 'bg-indigo-100 text-indigo-600',
  new: 'bg-green-100 text-green-600',
};

const ProductCard = ({ product, onAddToCart, isInCart }) => {
  const handleBuyNow = () => {
    if (isInCart) {
      toast.info(`"${product.name}" is already in your cart!`);
      return;
    }
    onAddToCart(product);
    toast.success(`"${product.name}" added to cart! 🛒`);
  };

  const formatPeriod = (period) => {
    if (period === 'monthly') return 'Mo';
    if (period === 'one-time') return 'One-Time';
    if (period === 'yearly') return 'Yr';
    return period;
  };

  return (
    <div className="relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col group overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-t-2xl" />

      {/* Tag Badge */}
      <div className="absolute top-4 right-4">
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full capitalize ${tagStyles[product.tagType] || 'bg-gray-100 text-gray-600'}`}>
          {product.tag}
        </span>
      </div>

      {/* Icon */}
      <div className="w-12 h-12 mb-4 bg-violet-50 rounded-xl flex items-center justify-center">
        <img
          src={`/assets/products/${product.icon}`}
          alt={product.name}
          className="w-7 h-7 object-contain"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
      </div>

      {/* Name */}
      <h3 className="text-lg font-bold text-gray-900 mb-2 pr-16">{product.name}</h3>

      {/* Description */}
      <p className="text-sm text-gray-500 mb-4 leading-relaxed flex-1">{product.description}</p>

      {/* Price */}
      <div className="flex items-baseline gap-1 mb-4">
        <span className="text-3xl font-extrabold text-gray-900">${product.price}</span>
        <span className="text-sm text-gray-400 font-medium">/{formatPeriod(product.period)}</span>
      </div>

      {/* Features */}
      <ul className="space-y-1.5 mb-6">
        {product.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
            <Check size={14} className="text-violet-500 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      {/* Buy Now Button */}
      <button
        onClick={handleBuyNow}
        className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
          isInCart
            ? 'bg-green-50 text-green-600 border border-green-200 cursor-default'
            : 'bg-gradient-to-r from-violet-600 to-indigo-500 text-white hover:from-violet-700 hover:to-indigo-600 shadow-md hover:shadow-violet-200 hover:-translate-y-0.5'
        }`}
      >
        {isInCart ? (
          <>
            <Check size={16} /> Added to Cart
          </>
        ) : (
          <>
            <ShoppingCart size={16} /> Buy Now
          </>
        )}
      </button>
    </div>
  );
};

export default ProductCard;
