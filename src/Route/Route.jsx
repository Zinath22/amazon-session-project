
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/mainLayout";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Product from "../Pages/Product/Product";
import DashBoard from "../Layouts/DashBoard/DashBoard";
import DashBoard2 from "../Pages/DashBoard2/DashBoard2";
import Profile from "../Pages/Profile/Profile";
import EditProfile from "../Pages/EditProfile/EditProfile";
const myCreatedRoute = createBrowserRouter([
    {
      path:"/",
      element : <MainLayout></MainLayout>,
     children : [
        {
          path: "/",
          element : <Home></Home>
        },
        {
          path: "/products",
          element : <Products></Products>,
          loader: () =>fetch(`https://dummyjson.com/products`)
        },
        {
            path : "/products/:id",
            element : <Product></Product>
            // loader : (object)=>fetch(`https://dummyjson.com/products/${object.params.id}`)
        },
        {
            path: "/dashboard",
            element: <DashBoard></DashBoard>,
            children:[
                {
                    path: '/dashboard',
                    element: <DashBoard2></DashBoard2>
                },
                {
                    path: '/dashboard/profile',
                    element: <Profile></Profile>
                },
                {
                    path: '/dashboard/editProfile',
                    element: <EditProfile></EditProfile>
                }
            ]
        }
      ]
    }
  ])

export default myCreatedRoute;