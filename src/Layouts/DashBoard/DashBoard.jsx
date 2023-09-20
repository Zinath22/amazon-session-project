import { Link, Outlet } from "react-router-dom";


const DashBoard = () => {
    return (
        <div className="flex gap-10">
            
            <div className="w-[20%] bg-red-200">
       <ul>
        <li>
            <Link to='/dashboard'>Dashboard</Link>
        </li>
        <li>
            <Link to='/dashboard/profile'>profile</Link>
        </li>
        <li>
            <Link to='/dashboard/editProfile'>Edit profile</Link>
        </li>
       </ul>
            </div>

            <div className="w-[30%]">
                <Outlet></Outlet>
            </div>
        </div>
        
    );
};

export default DashBoard;