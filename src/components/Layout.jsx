import {Outlet} from "react-router";
import Navbar from "./navbar/Navbar.jsx";
import Footer from "./footer/Footer.jsx";
import {motion} from "framer-motion";
import {commonPage} from "./animation/PageVariants.js";

export default function Layout(){
    return <motion.div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Konten utama */}
        <motion.main className="flex-grow pt-20 sm:pt-20 pb-20 sm:pb-5 bg-gray-50" initial="initial"
                     animate="animate"
                     exit="exit"
                     variants={commonPage}>
            <Outlet />
        </motion.main>

        {/* Footer */}
        <Footer />
    </motion.div>
}