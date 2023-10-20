import Logo from "../assets/logo.png";
import {Link} from 'react-router-dom';
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";
import {AiOutlineShoppingCart} from "react-icons/ai"




const logedInUser = () =>{
   return false ;
 }

 const Title = () => {
  return (
    <a href="/">
      <img
        className=" h-20 px-4 pt-3 "
        alt="logo"
        src={Logo}
      />
    </a>
  );
};
 
 
 const Header = () => {

  const cartItems = useSelector(store => store.cart.items);
  console.log(cartItems); 

  const isOnline = useOnline(); 
    return (
      <>
      <div className=" w-full h-25 top-0 flex justify-between items-center sticky shadow-lg bg-white z-[1001]">
        <Title />
        <div className="nav-items flex justify-around text-xl ">
          <ul className="flex py-8 ml-5 ">
           <Link to="/"> <li className="listItem hover:scale-105">Home</li>   </Link>

           <Link to ="/about">
           <li className="listItem hover:scale-105">About</li>
           </Link>

           <Link to ="/contact">
           <li className="listItem hover:scale-105">Contact</li>
           </Link>

           <Link to ="/instamart">
           <li className="listItem  hover:scale-105">Instamart</li>
           </Link>
           <Link to ="/cart">
            <li className="listItem hover:scale-105 flex"><AiOutlineShoppingCart size={26}/> 
            
            <p className="relative bottom-2 text-sm font-bold">{cartItems.length}</p>
            </li>
            </Link>
          </ul>
        </div>
        {/* <h1 className="pt-8 ml-5">{isOnline? "✅" : "🔴"}</h1> */}
        {logedInUser() ? <button className="mr-7">Logout</button> :<button className="mr-7 font-bold 
        hover:bg-orange-500 hover:scale-105 hover:text-white bg-orange-400 h-8 my-auto w-20 rounded-lg">LogIn</button> }
        
        
      </div>
      <hr className="" />
      </>
    );
  };

  

  export default Header ;

  