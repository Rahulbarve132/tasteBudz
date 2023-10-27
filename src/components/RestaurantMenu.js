import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constant";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { IoSearchOutline } from "react-icons/io5";
import { AiFillStar } from "react-icons/ai";
import { TbCoinRupee } from "react-icons/tb";
import { BsCircleHalf } from "react-icons/bs";
import { Audio } from 'react-loader-spinner';


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
                    {restaurant?.cards[0]?.card?.card?.info?.name}
                  </p>
                </div>
                <IoSearchOutline size={25} />
              </div>

              <div className="flex justify-between mt-8 pb-6">
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
                <div className="h-20 w-20 flex-col border-[1px] border-gray-300 rounded-md  flex justify-center items-center  ">
                  <div className=" flex-row flex items-center justify-center border-b-gray-400 border-b-[1px] pb-1  ">
                    <AiFillStar size={20} className="text-green-600" />
                    <div className="text-green-600 font-bold">
                      {restaurant?.cards[0]?.card?.card?.info?.avgRatingString}
                    </div>
                  </div>
                  <div className="text-xs my-1 font-bold font-[#7e808c]">
                    20+ rating
                  </div>
                </div>
              </div>
              <hr />

              <div className="flex items-center pt-5">
                <div className="mx-2 flex items-center mr-10">
                  <div className="mr-3">
                    <BsCircleHalf size={20} />
                  </div>
                  <div className="font-bold">Currently</div>
                </div>

                <div className="mr-3">
                  <TbCoinRupee size={24} />
                </div>
                <div className="font-bold">
                  {restaurant?.cards[0]?.card?.card?.info?.costForTwoMessage}
                </div>
              </div>

              <div className="both-box flex mt-5 pb-10">
                <div className="first-box border-2 mr-3 rounded-lg p-4">
                  <div className="text-[ 1.07rem] font-bold text-[#686b78] uppercase">
                    flat ₹75 off
                  </div>
                  <div className="uppercase text-xs font-bold">
                    No Code Required | Above ₹600{" "}
                  </div>
                </div>
                <div className="second-box border-2 rounded-lg p-4">
                  <div className="text-[ 1.07rem] text-[#686b78] font-bold uppercase">
                    50% off upto 300
                  </div>
                  <div className="uppercase text-xs font-bold">
                    {" "}
                    use CITIFOODIE | above ₹1200{" "}
                  </div>
                </div>
              </div>

              <hr />
            </>
          ) : (
            <div className="py-44">
            <Audio
  height="80"
  width="80"
  radius="9"
  color="orange"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>
</div>
          )}
          {restaurant ? (
            <div className="menu p-5">
              {restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map(
                (item) => (
                  <>
                  <div className="full-container flex py-10">
                  <div>
                    <div className="name text-[1.22rem] font-semibold text-[#3e4152]">
                    {item?.card?.info?.name}
                    </div>

                    <div className="price text-[#3e4152] text-[0.9rem]">
                    ₹{item?.card?.info?.price / 100}
                    </div>

                    <div className="mt-[14px] text-[0.8rem] pr-4 font-semibold text-[#b1b2b9]">
                    (NO ONION, NO GARLIC) A quick and delicious appetizer, sure to be your Navratri upvas favourite served with a delicuous imli chutney and curd
                    </div>
                  </div>

                  <div className="picture flex flex-col">
                  
                  <img className='rounded-lg h-24 ' src={ IMG_CDN_URL + item?.card?.info?.imageId} />
                  <button
                        onClick={() => addFoodItem(item)}
                        className="p-1 m-1  border-[1px] border-black rounded-lg font-semibold text-[#3e4152] flex justify-center items-center hover:bg-orange-100 "
                      >
                        Add +
                      </button>
                      </div>

                  
                  </div>
                  <hr />
                  </>
                )
              )}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;



 {/* <li key={item?.card?.info?.id}>
                      {item?.card?.info?.name}{" "}
                      <button
                        onClick={() => addFoodItem(item)}
                        className="p-1 m-1 bg-green-100"
                      >
                        Add
                      </button>
                    </li> */}
