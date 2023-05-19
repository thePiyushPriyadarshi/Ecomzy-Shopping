import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import {useEffect, useState } from "react";
const Cart = () => {

  const {cart}=useSelector((state) => state);
  const [toatlAmount,setTotalAmount] = useState(0);
  useEffect(()=>{
    setTotalAmount( cart.reduce((acc,curr)=> acc + curr.price,0));
  },[cart])
  return  (
    <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center">
    { 
      cart.length>0 ?
      (
        <>
        <div className="w-[100%] md:w-[60%] flex flex-col p-2">
          {
            cart.map((item) =>{
              return <CartItem key={item.id} item={item} />
            })
          }
        </div> 
        <div className="w-[100%] md:w-[40%] mt-5 flex flex-col">
        <div className="flex flex-col p-5 gap-5 my-14 h-[100%] justify-between">
            <div className="flex flex-col gap-5">
              <div className="font-semibold text-xl text-green-800">YOUR CART</div>
              <div className="text-green-700 font-semibold text-5xl -mt-5">SUMMARY</div>
              <p className="text-xl"> <span className="text-gray-700 font-semibold text-xl
              "> Total Item</span> : {cart.length}</p>
            </div>
            <div className="flex flex-col">
              <p className="text-xl font-bold"> <span className="text-gray-700 font-semibold">Total Amount </span>  : ${toatlAmount}</p>
              <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 boarder-green-600 font-bold hover:text-green-700 p-3 text-xl">Checkout Now</button>
            </div>
          </div>
          </div>
        </>
      ) :
      <div className="flex flex-col items-center justify-center w-full min-h-[80vh] ">
        <h1 className="font-semibold text-xl mb-6">Your Cart is empty!</h1>
        <Link to="/"><button className="bg-green-600 px-10 py-3 text-white uppercase rounded-md font-semibold text-lg">Shop Now</button></Link>
      </div>
      }

    </div>
  );
};

export default Cart;
