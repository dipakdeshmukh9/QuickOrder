import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState , useEffect , useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {

   const[ listOfRestaurants, setListOfRestaurant] = useState([]);

   const[filteredRestaurants , setFilteredRestaurants] = useState([]);

   const [searchText , setSearchText] = useState("");

   // console.log("body render",listOfRestaurants);

    useEffect(() => {
     fetchData();
    },[]);

    const fetchData = async () => {
      const data = await fetch (
         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      //console.log(json);
      setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     
   };

const onlineStatus =  useOnlineStatus();

if(onlineStatus === false) return(
 <h1>
   Looking like you're offline !! please check your internet connection .
</h1>
)
    
   const {loggedInUser,setUserName} = useContext(UserContext);


    return listOfRestaurants.length === 0 ? (
       <Shimmer/> 
      ) : (
       <div className="body">
          <div className="flex items-center">
            <div className="search p-4 m-4 items-center">
               <input type="text" 
               className="border border-solid border-black"
               value={searchText}
               onChange={(e) => {
                  setSearchText(e.target.value);
               }}
               />

               <button className="px-4 py-2 bg-green-400 m-4 rounded-lg"
                onClick={() => {
                  const filteredRestaurants = listOfRestaurants.filter(
                    (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                  );
                  setFilteredRestaurants(filteredRestaurants);
               }}>
                  Search</button>
            </div>
            <div className="px-4 py-2">
               <button className="px-4 py-2 bg-gray-400 rounded-lg"
            onClick={() => {
               filteredList= listOfRestaurants.filter(
                  (res) => res.info.avgRating > 4 
               );
               setListOfRestaurant(filteredList);
            }}
            >Top Rated Restaurants</button>
            </div>
            <div className="search m-4 p-4 flex items-center">
               <label>userName : </label>
               <input className="border border-black p-2"
               value={loggedInUser}
               onChange={(e) => setUserName(e.target.value)}
               />
            </div>
            </div>
          <div className="flex flex-wrap">
             {filteredRestaurants.map((restaurant)=> (
                <Link
                key={restaurant.info.id}
                 to={"restaurants/" +restaurant.info.id}
                 >
                <RestaurantCard resData={restaurant}/>
                </Link>
             ))
 
             }
          </div>
       </div>
    )
 }
 export default Body;