import { useNavigate } from "react-router-dom";

const Product = ({ item }) => {
  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate(`/product/${item._id}`)
  }

  return (
    <div className="container flex flex-col group w-1/4 p-4"> 
      <div className="h-4/5 relative">
        <img src={item.img} alt={item.title} className="h-full w-full object-cover"/> 
        
        <div className="overlay bg-black bg-opacity-50 flex justify-center items-center h-full absolute top-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className='text-white border border-white bg-transparent py-2 px-6 cursor-pointer scale-100 hover:scale-105 transition-transform ease-in duration-200' onClick={handleClick}>SHOP</button>
        </div>
      </div>
      <div className="details flex flex-col justify-start h-1/5 mt-2">
        <h1 className="title overflow-clip">{item.title}</h1>
        <p className="price">Rs. {item.price}</p>
      </div>
    </div>
  );
};

export default Product;
