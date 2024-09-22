import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ProductItem = ({ item }) => {
  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate(`/product/${item._id}`)
  }

  return (
    <Link to={`/product/${item._id}`} className="text-gray-700 cursor-pointer hover:scale-105 transition-all duration-150">
      <div className="overflow-hidden">
          <img src={item.img} alt={item.title} className="h-full w-full object-cover"/> 
      </div>
      <div>
      <h1 className="pt-3 pb-1 text-sm">{item.title}</h1>
      <p className="text-sm font-medium">Rs. {item.price}</p>
      </div>
    </Link>

  );
};

export default ProductItem;
