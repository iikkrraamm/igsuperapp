import {Outlet} from "react-router";
import Navbar from "./navbar/Navbar.jsx";

export default function Layout(){
    return <>
        <Navbar/>
        <div>
            <Outlet/>
        </div>
    </>
}