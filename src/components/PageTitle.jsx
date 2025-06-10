import { useLocation } from "react-router";
import { useEffect } from "react";

const titles = {
    "/": "IG Superapp",
    "/login": "Login",
    "/about": "About",
    "/register": "Register",
    "/countdown": "Countdown",
};

const PageTitle = () => {
    const location = useLocation();

    useEffect(() => {
        const title = titles[location.pathname] || "IG Superapp";
        document.title = title;
    }, [location.pathname]);

    return null;
};

export default PageTitle;
