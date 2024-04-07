import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
const Body = () => {

   const[ listOfRestaurants, setListOfRestaurant] = useState(resList);

    return(
       <div className="body">
          <div className="filter">
            <button className="filter-btn"
            onClick={() => {
               filteredList= listOfRestaurants.filter(
                  (res) => res.info.avgRating > 4 
               );
               setListOfRestaurant(filteredList);
            }}
            >Top Rated Restaurants</button>
            </div>
          <div className="res-container">
             {listOfRestaurants.map((restaurant)=>(
                <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
             ))
 
             }
          </div>
       </div>
    )
 }
 export default Body;