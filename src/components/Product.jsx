import { useDispatch, useSelector } from "react-redux";
import {add,remove }from '../redux/Slices/CartSlice'
import { toast } from "react-hot-toast";
const Product = ({item}) => {

  const {cart}=useSelector((state)=>state);
  const dispatch = useDispatch(); 

  const addToCart= () =>{
    dispatch(add(item));
    toast.success("Item added to cart!");

  }
  const removeFromCart=()=>{
    dispatch(remove(item.id));
    toast.error("Item removed from cart!");
  }
  return  (
    <div className="flex flex-col justify-between items-center hover:scale-110 duration-300 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024] ease-in rounded-xl gap-3 p-4 mt-10 ml-5">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1 ">{item.title}</p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left mt-1">
          {item.description.split(" ").slice(0,10).join(" ")}
        </p>
      </div>
      <div className="h-[180px]">
        <img src={item.image} alt="" className="h-full" />
      </div>

      <div className="flex w-full justify-between items-center mt-5">

      <div>
        <p className="text-green-600 font-semibold ">${item.price}</p>
      </div>

     {
      cart.some((p) => p.id === item.id) ? 
      <button className="text-gray-700 border-2 border-gray-700 font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white rounded-full" onClick={removeFromCart}>Remove Item</button> :
      <button className="text-gray-700 border-2 border-gray-700 font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white rounded-full" onClick={addToCart}>Add to Cart</button>
     }
      </div>
    </div>
  );
};

export default Product;
