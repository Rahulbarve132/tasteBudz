import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constant";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { IoSearchOutline } from "react-icons/io5";
import { AiFillStar } from "react-icons/ai";

const RestaurantMenu = () => {
  const { id } = useParams();

  // const [restaurant, setRestaurant] = useState();

  const restaurant = useRestaurant(id);

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <>
      <div className="flex items-center justify-center  w-[800px] mx-auto">
        <div>
          {restaurant ? (
            <>
              <div className="  flex flex-row justify-between  w-[800px] my-6">
                <div className="flex">
                  <p className="font-normal text-sm text-gray-500 px-2">
                    Home/{restaurant?.cards[0]?.card?.card?.info?.city} /
                  </p>
                  <p className="text-gray-700 text-sm px-2">
                    {restaurant?.cards[0]?.card?.card?.info?.name}{" "}
                  </p>
                </div>
                <IoSearchOutline size={25} />
              </div>

              <div className="flex justify-between">
                <div className="flex flex-col">
                  <span className="text-[1.43rem] text-[#282c3f] font-bold">
                    {restaurant?.cards[0]?.card?.card?.info?.name}
                  </span>
                  <span className="text-[0.93rem] text-[#7e808c]">
                    {" "}
                    {restaurant?.cards[0]?.card?.card?.info?.cuisines.join(
                      " , "
                    )}
                  </span>
                  <span className="text-[0.93rem] text-[#7e808c]">
                    {restaurant?.cards[0]?.card?.card?.info?.areaName}
                  </span>
                </div>
                <div className="h-20 flex-col border-[1px] border-gray-300 rounded-md  flex justify-center items-center  ">
                  <div className="flex items-center justify-center border-b-gray-400 border-b-[1px] pb-2 flex-col ">
                    <AiFillStar size={20} className="text-green-600" />
                    <div className="text-green-600 font-bold">

                      {
                        restaurant?.cards[0]?.card?.card?.info?.avgRatingString
                      }
                      
                    </div>
                    <div>20+ rating</div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <p>Loading...</p>
          )}
          {restaurant ? (
            <div className="menu p-5">
              <ul>
                {restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map(
                  (item) => (
                    <li key={item?.card?.info?.id}>
                      {item?.card?.info?.name}{" "}
                      <button
                        onClick={() => addFoodItem(item)}
                        className="p-1 m-1 bg-green-100"
                      >
                        Add
                      </button>
                    </li>
                  )
                )}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
