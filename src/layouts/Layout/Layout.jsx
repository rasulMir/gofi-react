import { useState } from "react";
import { Outlet } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import SidebarList from "../../pages/widgets/SidebarList/SidebarList";
import UserProfile from "../../pages/widgets/UserProfile/UserProfile";
import Footer from "../Footer/Footer";
import "./Layout.scss";

function Layout() {


	const [ isLogged, setisLogged ] = useState(false)

    return (
        <>
            <div className="layout-wrap">
                <div className="layout-body">
                    <aside className="layout-sidebar">
                        <div className="sidebar-top-logo">
                            <Logo />
                        </div>
						<SidebarList />
                    </aside>
                    <section className="layout-content">
						<div className="layout-content-top">
							<UserProfile />
						</div>
						<Outlet />
					</section>
                </div>

                <Footer />
            </div>
        </>
    );
}

export default Layout;
