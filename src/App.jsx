import {Routes, Route, useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Layout from "./components/Layout.jsx";
import About from "./pages/About.jsx";
import Countdown from "./pages/Countdown.jsx";
import PageTitle from "./components/PageTitle.jsx";

const App = () => {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait" initial={false}>
            <PageTitle/>
            <Routes location={location} key={location.pathname}>
                <Route element={<Layout/>}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<div>register</div>} />

                    <Route path="/countdown" element={<Countdown />}>
                        <Route path=":slugs" element={<Countdown />} />
                    </Route>
                </Route>
            </Routes>
        </AnimatePresence>
    );
};

export default App;
