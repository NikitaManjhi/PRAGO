import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { publicRequest } from '../requestMethods';
import { addProduct } from '../Redux/slice/cart';
import { useDispatch } from 'react-redux';
import Navbar from '../components/Header/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const SingleProduct = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  
  // Fetch product details
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await publicRequest.get(`/products/find/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProduct();
  }, [id]);

  // Handle quantity increment and decrement
  const handleQuantity = (type) => {
    if (type === 'increment') {
      setQuantity((prev) => prev + 1);
    } else if (type === 'decrement' && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  // Handle Add to Cart
  const handleAddToCart = () => {
    dispatch(addProduct({ ...product, quantity, selectedColor, selectedSize }));
  };

  return product ? (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Product Image */}
          <div className="flex justify-center">
            <img
              src={product.img}
              alt={product.title}
              className="w-full max-w-md h-auto object-contain"
            />
          </div>
          
          {/* Product Details */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold">{product.title}</h1>
              <p className="text-lg mt-4 text-gray-600">{product.desc}</p>
              <p className="text-2xl font-semibold mt-6">₹{product.price}</p>
            </div>

            {/* Color Selection */}
            <div className="">
              <h3 className="font-medium">COLOR</h3>
              <div className="flex gap-3 mt-2">
                {product.color?.map((color, index) => (
                  <div
                    key={index}
                    className={`w-8 h-8 rounded-full cursor-pointer border-2 transition-transform duration-150 ease-in-out
                    ${selectedColor === color ? 'border-black scale-110' : 'border-gray-300'}`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="my-1">
              <h3 className="font-medium">SIZE</h3>
              <div className="flex gap-3 mt-2">
                {product.size?.map((size, index) => (
                  <div
                    key={index}
                    className={`p-2 border cursor-pointer transition-transform duration-150 ease-in-out
                    ${selectedSize === size ? 'border-black scale-105 bg-gray-100' : 'border-gray-300'}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="my-1">
              <h3 className="font-medium mb-2">Quantity</h3>
              <div className="flex items-center gap-4">
                <button
                  className="w-8 h-8 border border-gray-400 flex justify-center items-center"
                  onClick={() => handleQuantity('decrement')}
                >
                  -
                </button>
                <span className="text-lg">{quantity}</span>
                <button
                  className="w-8 h-8 border border-gray-400 flex justify-center items-center"
                  onClick={() => handleQuantity('increment')}
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              className="mt-5 py-3 px-6 bg-black text-white font-medium tracking-wider hover:scale-105 transition duration-200"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            <hr className='mt-8 sm:w-4/5'/>
            <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                <p>100% Original Product</p>
                <p>Cash on Delivery is available on this product.</p>
                <p>Easy return and exchange policy within 7 days.</p>
            </div>
          </div>
        </div>
                {/* description */}
        <div className='mt-20'>
                <div className='flex'>
                    <b className='border px-5 py-3 text-sm'>Description</b>
                    <b className='border px-5 py-3 text-sm'>Reviews</b>
                </div>
                <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos doloribus nemo asperiores optio quibusdam sunt omnis reprehenderit cum accusamus tenetur odit hic neque, culpa, quod nesciunt illum qui repellendus eum!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
        </div>

        {/* Related Products */}
      </div>
      <Newsletter />

    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default SingleProduct;
