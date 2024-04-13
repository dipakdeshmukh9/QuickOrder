
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCatergory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {

    const {resId} = useParams();

   const dummy = "dummy data";

    const resInfo = useRestaurantMenu(resId);
    
    const [showIndex , setShowIndex] = useState(0);

    if(resInfo===null )  return <Shimmer/>; 

 const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card;
//console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c)=>
     c.card?.card?.["@type"] === 
     "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
);


    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl ">{name}</h1>
            <p className="font-bold text-lg"> 
            {cuisines.join(",")} - {costForTwoMessage}
           </p>
           {categories.map((category , index) => (
            <RestaurantCatergory  
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
            dummy={dummy}
            />
           ))}
         </div>
    )
}
export default RestaurantMenu;