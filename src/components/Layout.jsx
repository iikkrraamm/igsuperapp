import {Outlet} from "react-router";
import Navbar from "./navbar/Navbar.jsx";
import Footer from "./footer/Footer.jsx";

export default function Layout(){
    return <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Konten utama */}
        <main className="flex-grow pt-20 sm:pt-20 pb-20 sm:pb-5 bg-gray-50">
            <Outlet />
        </main>

        {/* Footer */}
        <Footer />
    </div>
}