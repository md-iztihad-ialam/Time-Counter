import { Outlet } from "react-router-dom";
import Banner from "../Banner/Banner";

function Layout(){
    return(
        <div>
            <Banner />
            <Outlet />
        </div>
    );
}

export default Layout;