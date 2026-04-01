import { Trash2 } from 'lucide-react';
import { toast } from 'react-toastify';

const CartItem = ({ item, onRemove }) => {
  const handleRemove = () => {
    onRemove(item.id);
    toast.error(`"${item.name}" removed from cart.`);
  };

  const formatPeriod = (period) => {
    if (period === 'monthly') return '/Mo';
    if (period === 'one-time') return ' (One-Time)';
    if (period === 'yearly') return '/Yr';
    return period;
  };

  return (
    <div className="flex items-center gap-4 bg-white rounded-2xl border border-gray-100 shadow-sm p-4 hover:shadow-md transition-shadow duration-200 group">
      {/* Icon */}
      <div className="w-12 h-12 bg-violet-50 rounded-xl flex items-center justify-center flex-shrink-0">
        <img
          src={`/assets/products/${item.icon}`}
          alt={item.name}
          className="w-7 h-7 object-contain"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-semibold text-gray-900 truncate">{item.name}</h4>
        <p className="text-xs text-gray-400 mt-0.5 capitalize">{item.tagType}</p>
      </div>

      {/* Price */}
      <div className="text-right flex-shrink-0">
        <span className="text-base font-bold text-violet-600">${item.price}</span>
        <span className="text-xs text-gray-400">{formatPeriod(item.period)}</span>
      </div>

      {/* Remove Button */}
      <button
        onClick={handleRemove}
        className="ml-2 w-9 h-9 flex items-center justify-center rounded-xl text-gray-400 hover:bg-red-50 hover:text-red-500 transition-all duration-200 flex-shrink-0"
        title="Remove from cart"
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
};

export default CartItem;
