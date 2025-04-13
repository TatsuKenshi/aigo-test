import { useState, lazy } from "react";
import { Outlet, useNavigation, useLocation } from "react-router-dom";
import {
  menuItemsFull,
  menuItemsShort,
  sideDishes,
  introImages,
  menuPreview,
  people,
  story,
} from "../data";
import ScrollReset from "../components/ScrollReset";
import { withNamespaces } from "react-i18next";
import BigOrdersModal from "../components/BigOrdersModal";

const Navbar = lazy(() => import("../components/Navbar"));
const Hero = lazy(() => import("../components/Hero"));
const Footer = lazy(() => import("../components/Footer"));
const Sidebar = lazy(() => import("../components/Sidebar"));
const ScrollToTop = lazy(() => import("../components/ScrollToTop"));

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  const [item, setItem] = useState({});
  const [sidebarStatus, setSidebarStatus] = useState("hidden");
  let location = useLocation();

  return (
    <main>
      <ScrollReset>
        {location.pathname.match("/") ? <BigOrdersModal /> : null}
        <Navbar />
        <Sidebar />
        <Hero />
        <section>
          {isPageLoading ? (
            <div></div>
          ) : (
            <Outlet
              context={{
                item,
                setItem,
                menuItemsFull,
                menuItemsShort,
                sideDishes,
                introImages,
                menuPreview,
                people,
                story,
                sidebarStatus,
                setSidebarStatus,
              }}
            />
          )}
        </section>
        <ScrollToTop />
        <Footer />
      </ScrollReset>
    </main>
  );
};

export default withNamespaces()(HomeLayout);
