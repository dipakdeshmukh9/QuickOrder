
import React , {Suspense, lazy} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
//import About from "./components/About";
import { createBrowserRouter , RouterProvider , Outlet} from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
//import Grocery from "./components/Grocery";
   
const Grocery = lazy(() => import("./components/Grocery"));

const About = lazy(() => import("./components/About"));

const Applayout = () => {
return( 
     <div className="app">
      <Header/>
      <Outlet/>
   </div>
)
}

const appRouter = createBrowserRouter([
   {
      path: "/",
      element:<Applayout/>,
      children:[
         {
            path:"/",
            element:<Body/>

         },
         {
            path:"/about",
            element:<Suspense fallback={<h1>Loading...</h1>}><About/></Suspense>
         },
         {
            path:"/contact",
            element:<Contact/>
         },
         {
            path:"/grocery",
            element:<Suspense fallback={<h1>Loading....</h1>}><Grocery/> </Suspense>
         },
         {
            path:"restaurants/:resId",
            element:<RestaurantMenu/>
         }
      ],
       errorElement:<Error/>
      
   },
 
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
