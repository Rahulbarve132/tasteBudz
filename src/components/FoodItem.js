// import { IMG_CDN_URL } from "../constant";


// const FoodItem =({
//     name,
//     discription,
//     cloudinaryImageId,
//     price, 
// })=>{
//     console.log(discription);
//     return(
// <div className="card w-[241px] h-[20rem] p-[10px] px-2 mx-3 my-2 shadow-xl rounded-2xl">
 
//         <img className='rounded-lg ' src={ IMG_CDN_URL + cloudinaryImageId} />
//         <h2 className='font-bold text-2xl p-1 tracking-tighter'>{name}</h2>
//         <h3>{discription}</h3>
//         <h4>{price} </h4>
//       </div>

//     )
// }


// export default FoodItem ;
import { useDispatch, useSelector } from "react-redux";
import { IMG_CDN_URL } from "../constant";
import { addItem, clearCart, decreamentItem } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const FoodItem = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const disptach = useDispatch();

  const handleAddFoodItem = (item) => {
    disptach(addItem(item));
  };
  const handleDecreamentFoodItem = (item) => {
    disptach(decreamentItem(item));
  };
  

  const getItemCount = (item) => {
    const currentItem = cartItems.find((cartItem) => item?.card?.info?.id === cartItem.id);
    return currentItem ? currentItem.quantity : 0;
  };

  const getTotal = () => {
    let total = 0;
    for (const item of cartItems) {
      total += item.card.info.price;
    }
    return total;
  };
  const handleClearCart = () => {
    disptach(clearCart());
  };

  // const url = useLocation();

  return (
    <div className="">
          <div className="w-100%  flex md:items-center flex-col justify-center mx-auto md:text-center m-10">
    <div
    className={` ${
      0 && !cartItems.length && "hidden"
    }    m-8 p-8 bg-white shadow-md font-poppins text-sm flex flex-col`}
    >
      <div className="flex justify-between mb-5 border-b-2 ">
        <div className="flex w-full pb-2 justify-between items-center">
          <span className="font-bold text-base sm:text-xl">Cart Items</span>
          <button
            className="text-base sm:text-xl font-poppins bg-slate-900 px-2 py-1 text-white"
            onClick={handleClearCart}
            >
            {" "}
            Clear Cart
          </button>
        </div>
      </div>
      <div className="border-b-2">
        {cartItems.map((item) => {
           console.log(item);
          return (
            <div
            key={item?.card?.info?.id}
            className="pl-2 pb-2 grid grid-cols-2 md:flex justify-between md:items-center gap-1 my-8 "
            >
              <img
                className="w-24"
                src={IMG_CDN_URL + item?.card?.info?.imageId}
                alt=""
                onError={(event) => (event.target.style.display = "block")}
                />
              <div className="text-sm line-clamp-1 md:line-clamp-none lg:line-clamp-none md:w-60 md:text-lg">{item?.card?.info?.name}</div>
              <div className="flex justify-between font-poppins w-20 h-7 border bg-slate-50 text-black py-[2px] px-2">
                <button onClick={() => handleDecreamentFoodItem(item)}>
                  -
                </button>
                <span className="text-base">{getItemCount(item)}</span>
                <button onClick={() => handleAddFoodItem(item)}>+</button>
              </div>
              <div className="w-14 font-medium flex justify-center">
                <span className="text-lg">&#8377;{(item?.card?.info?.price + 0.0) / 100}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between pt-2 font-bold">
        <span className="text-xl">Total</span>
        <span className="text-xl">&#8377;{(getTotal() + 0.0) / 100}</span>
      </div>
      {/* {url.pathname !== "/checkout" && (
        <Link to={"/checkout"}>
        <button className="font-poppins bg-slate-900 mt-4 p-2 text-white w-full">
        Checkout
          </button>
        </Link>
      )} */}
    </div>
        </div>
    </div>
  );
};

export default FoodItem;