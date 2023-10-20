import { IMG_CDN_URL } from '../constant'


const RestaurantCard = ({
  rating,
  cuisines,
  img,
  name
  }) => {
    return (
      <div className="card w-[241px] h-[20rem] p-[10px] px-2 mx-3 my-2 shadow-xl rounded-2xl">
        <img className='rounded-lg ' src={ IMG_CDN_URL +img} />
        <h2 className='font-bold text-2xl p-1 tracking-tighter'>{name}</h2>
        <h3>{cuisines.join(" , ")}</h3>
        <h4>{rating} </h4>
      </div>
    );
  };

  export default RestaurantCard ;

