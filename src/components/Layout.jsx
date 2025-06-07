import {Outlet} from "react-router";
import Navbar from "./navbar/Navbar.jsx";

export default function Layout(){
    return <>
        <Navbar/>
        <div className="pt-20 sm:pt-20 bg-gray-50">
            <Outlet/>
        </div>
    </>
}