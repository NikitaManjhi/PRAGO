import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { useDispatch } from "react-redux";
import { deleteProduct, updateQuantity } from "../../Redux/slice/cart";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(item.quantity);

  const handleDelete = () => {
    dispatch(
      deleteProduct({ id: item._id, quantity: quantity, price: item.price })
    );
  };

  const incrementQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    dispatch(updateQuantity({ id: item._id, quantity: newQuantity }));
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      // Prevent quantity from going below 1
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      dispatch(updateQuantity({ id: item._id, quantity: newQuantity }));
    }
  };

  return (
    <div className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4">
      <div className="flex items-start gap-6 ">
        <img src={item.img} alt="" className="w-16 sm:w-20" />
        <div>
          <p className="text-xs sm:text-lg font-medium">{item.title}</p>
          <div className="flex items-center gap-5 mt-2">
            <p>Rs. {item.price}</p>
            <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">
              {item.selectedSize}
            </p>
          </div>
        </div>
      </div>

      {/* Quantity Control */}
      <div className="flex items-center gap-2">
        <button onClick={decrementQuantity} className="border px-2">
          -
        </button>
        <input
          type="number"
          min={1}
          value={quantity}
          className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 text-center"
          readOnly
        />
        <button onClick={incrementQuantity} className="border px-2">
          +
        </button>
      </div>

      <img
        src={assets.bin_icon}
        alt=""
        className="w-4 mr-4 sm:w-5 cursor-pointer"
        onClick={handleDelete}
      />
    </div>
  );
};

export default CartItem;
