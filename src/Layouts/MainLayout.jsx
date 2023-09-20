import { NavLink, Outlet, useNavigation } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";
import Spinner from "../Components/Spinner/Spinner";


const MainLayout = () => {

    const navigation = useNavigation()
    const isLoadingProducts = navigation.state === "loading";

    return (
       <div>
         <section className=" flex justify-between px-10 shadow-md py-7">
            <div>
                <h1 className="text-3xl font-bold">Amazon</h1>
            </div>
        <nav>
            <ul className="flex gap-5">

                <NavLink 
                to="/"
                className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-green-400" : ""
              }>
               Home
                </NavLink>
                
                <NavLink 
                 to="/products"
                className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-green-400" : ""
              }>
               Products
                </NavLink>
                <NavLink 
                to="/dashboard"
                className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-green-400" : ""
              }>
               Dashboard
                </NavLink>
            </ul>
        </nav>
        
      </section>
      
      {navigation.state === 'loading' ? (<Spinner></Spinner>) :
     ( <div className="min-h-screen">
      <Outlet></Outlet>
      </div>)}
   <Footer></Footer>
      </div>
    );
};

export default MainLayout;