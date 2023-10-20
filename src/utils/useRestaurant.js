import { useState ,useEffect } from "react";
import { FETCH_MENU_URL } from "../constant";

const useRestaurant = (id) =>{
   const [restaurant , setRestaurant] = useState(null);

   useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    try {
      const data = await fetch(
        FETCH_MENU_URL  + id
      );
      const json = await data.json();
      console.log(json?.data?.cards[0]?.card?.card);
      setRestaurant(json?.data);
      const info = json?.data?.cards[0].card?.card.info;
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  }
  return restaurant ;
};

export default useRestaurant ;