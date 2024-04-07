import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState , useEffect } from "react";
const Body = () => {

   const[ listOfRestaurants, setListOfRestaurant] = useState([]);

   const[filteredRestaurants , setFilteredRestaurants] = useState([]);

   const [searchText , setSearchText] = useState("");
    useEffect(() => {
     fetchData();
    },[]);

    const fetchData = async () => {
      const data = await fetch (
         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log(json);
      setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     
   };

    
    return listOfRestaurants.length === 0 ? (
       <Shimmer/> 
      ) : (
       <div className="body">
          <div className="filter">
            <div className="search">
               <input type="text" className="search-box"
               value={searchText}
               onChange={(e) => {
                  setSearchText(e.target.value);
               }}
               />

               <button onClick={() => {
                  const filteredRestaurants = listOfRestaurants.filter(
                    (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                  );
                  setFilteredRestaurants(filteredRestaurants);
               }}>
                  Search</button>
            </div>
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
             {filteredRestaurants.map((restaurant)=>(
                <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
             ))
 
             }
          </div>
       </div>
    )
 }
 export default Body;